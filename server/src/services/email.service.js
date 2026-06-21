const { Resend } = require("resend");
const { config, isEmailConfigured } = require("../config");
const { escapeHtml } = require("../utils/html");

// Lazily create a single Resend client. If the key is missing we throw a
// 503 (service unavailable) rather than crashing the whole process.
let client = null;
function getClient() {
  if (!isEmailConfigured()) {
    const err = new Error("Email service is not configured.");
    err.status = 503;
    err.expose = true;
    throw err;
  }
  if (!client) client = new Resend(config.resendApiKey);
  return client;
}

const row = (label, value) =>
  `<tr>
     <td style="padding:6px 12px;color:#64748b;font:600 12px/1.4 sans-serif;text-transform:uppercase;letter-spacing:.05em;vertical-align:top;white-space:nowrap">${escapeHtml(label)}</td>
     <td style="padding:6px 12px;color:#0f172a;font:14px/1.6 sans-serif">${value}</td>
   </tr>`;

function layout(title, introHtml, rowsHtml) {
  return `<!doctype html><html><body style="margin:0;background:#0b0f0e;padding:24px">
    <table role="presentation" width="100%" style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e2e8f0">
      <tr><td style="background:#0b0f0e;padding:18px 20px">
        <span style="font:700 16px sans-serif;color:#22c55e">Goa-Oriented Academy</span>
        <span style="font:13px sans-serif;color:#94a3b8"> · ${escapeHtml(title)}</span>
      </td></tr>
      ${introHtml ? `<tr><td style="padding:18px 20px 4px;font:15px/1.6 sans-serif;color:#0f172a">${introHtml}</td></tr>` : ""}
      <tr><td style="padding:8px"><table role="presentation" width="100%">${rowsHtml}</table></td></tr>
    </table>
  </body></html>`;
}

// A multiline message stays safe: escape first, THEN convert newlines to <br>.
const multiline = (value) => escapeHtml(value).replace(/\r?\n/g, "<br>");

// Core send. `to` is required so callers decide the recipient (the visitor,
// or the academy inbox). Returns Resend's `{ id }` on success.
async function send({ to, subject, html, text, replyTo }) {
  const resend = getClient();
  const { data, error } = await resend.emails.send({
    from: config.fromEmail,
    to,
    subject,
    html,
    text,
    replyTo,
  });

  if (error) {
    // Surface a clean, non-sensitive error to the caller.
    const err = new Error(error.message || "Failed to send email.");
    err.status = 502;
    err.expose = true;
    throw err;
  }
  return data; // { id }
}

// Attempt several emails and tolerate partial failure. As long as ONE message
// is delivered the submission counts as sent, so a rejected visitor
// confirmation (e.g. Resend's sandbox only allows the account owner) still
// succeeds via the academy copy. Only when every send fails do we surface the
// error. Sends run sequentially to stay under Resend's request rate limit.
async function deliver(messages) {
  const attempts = messages.filter(Boolean);
  let firstId = null;
  let firstError = null;

  for (const message of attempts) {
    try {
      const data = await send(message);
      if (!firstId && data && data.id) firstId = data.id;
    } catch (err) {
      if (!firstError) firstError = err;
      console.error(`[email] ${message.label} failed:`, err.message);
    }
  }

  if (!firstId && firstError) throw firstError;
  return firstId;
}

function sendContactEmail({ name, email, topic, message }) {
  // 1) Confirmation that goes to the visitor's own email address.
  const userSubject = "We received your message — Goa-Oriented Academy";
  const intro = `Hi ${escapeHtml(name)}, thanks for reaching out to Goa-Oriented Academy. We've received your message and a real human will get back to you within 1–2 business days. Here's a copy for your records:`;
  const rows =
    (topic ? row("Topic", escapeHtml(topic)) : "") +
    row("Your message", multiline(message));

  const userText =
    `Hi ${name},\n\n` +
    `Thanks for reaching out to Goa-Oriented Academy. We've received your message ` +
    `and will get back to you within 1–2 business days.\n\n` +
    `Here's a copy for your records:\n` +
    (topic ? `Topic: ${topic}\n` : "") +
    `\n${message}\n`;

  const userMessage = {
    label: "visitor confirmation",
    to: email,
    subject: userSubject,
    html: layout("Message received", intro, rows),
    text: userText,
    replyTo: config.toEmail || undefined,
  };

  // 2) Copy to the academy inbox (only if TO_EMAIL is set). In Resend's
  //    sandbox this is the address that actually accepts mail, so it doubles
  //    as the fallback when the visitor confirmation is rejected.
  const adminRows =
    row("Name", escapeHtml(name)) +
    row("Email", `<a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>`) +
    (topic ? row("Topic", escapeHtml(topic)) : "") +
    row("Message", multiline(message));
  const adminMessage = config.toEmail && {
    label: "academy copy",
    to: config.toEmail,
    subject: `New contact message — ${name}${topic ? ` (${topic})` : ""}`,
    html: layout("Contact", "", adminRows),
    text: `New contact message\n\nName: ${name}\nEmail: ${email}\n${topic ? `Topic: ${topic}\n` : ""}\n${message}\n`,
    replyTo: email,
  };

  return deliver([userMessage, adminMessage]);
}

function sendApplicationEmail({ fullname, email, program, experience, motivation }) {
  // 1) Confirmation that goes to the applicant's own email address.
  const userSubject = "Application received — Goa-Oriented Academy";
  const intro = `Hi ${escapeHtml(fullname)}, thanks for applying to Goa-Oriented Academy! We've received your application and a mentor will reach out within a couple of days to talk through your goals. Here's a copy of what you submitted:`;
  const rows =
    (program ? row("Program", escapeHtml(program)) : "") +
    (experience ? row("Experience", escapeHtml(experience)) : "") +
    (motivation ? row("Your goals", multiline(motivation)) : "");

  const userText =
    `Hi ${fullname},\n\n` +
    `Thanks for applying to Goa-Oriented Academy! We've received your application ` +
    `and a mentor will reach out within a couple of days.\n\n` +
    `Here's a copy of what you submitted:\n` +
    (program ? `Program: ${program}\n` : "") +
    (experience ? `Experience: ${experience}\n` : "") +
    (motivation ? `\nGoals: ${motivation}\n` : "");

  const userMessage = {
    label: "applicant confirmation",
    to: email,
    subject: userSubject,
    html: layout("Application received", intro, rows),
    text: userText,
    replyTo: config.toEmail || undefined,
  };

  // 2) Copy to the academy inbox (only if TO_EMAIL is set); doubles as the
  //    fallback when the applicant confirmation is rejected (Resend sandbox).
  const adminRows =
    row("Name", escapeHtml(fullname)) +
    row("Email", `<a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>`) +
    (program ? row("Program", escapeHtml(program)) : "") +
    (experience ? row("Experience", escapeHtml(experience)) : "") +
    (motivation ? row("Motivation", multiline(motivation)) : "");
  const adminMessage = config.toEmail && {
    label: "academy copy",
    to: config.toEmail,
    subject: `New application — ${fullname}${program ? ` (${program})` : ""}`,
    html: layout("Application", "", adminRows),
    text: `New application\n\nName: ${fullname}\nEmail: ${email}\n${program ? `Program: ${program}\n` : ""}${experience ? `Experience: ${experience}\n` : ""}${motivation ? `\n${motivation}\n` : ""}`,
    replyTo: email,
  };

  return deliver([userMessage, adminMessage]);
}

module.exports = { sendContactEmail, sendApplicationEmail };
