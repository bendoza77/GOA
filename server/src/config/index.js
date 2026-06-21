require("dotenv").config();

const toList = (value) =>
  (value || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

const config = Object.freeze({
  port: Number(process.env.PORT) || 3000,
  nodeEnv: process.env.NODE_ENV || "development",
  isProd: (process.env.NODE_ENV || "development") === "production",

  resendApiKey: process.env.RESEND_API_KEY || "",
  fromEmail:
    process.env.FROM_EMAIL || "Goa-Oriented Academy <onboarding@resend.dev>",
  toEmail: process.env.TO_EMAIL || "",

  allowedOrigins: toList(process.env.ALLOWED_ORIGINS).length
    ? toList(process.env.ALLOWED_ORIGINS)
    : ["http://localhost:5173"],
});

// Mail is sent to the address the visitor enters, so only the API key is
// strictly required. TO_EMAIL is optional (an extra copy to the academy).
const isEmailConfigured = () => Boolean(config.resendApiKey);

/** Print actionable warnings without leaking secret values. */
function logConfigWarnings() {
  if (!config.resendApiKey) {
    console.warn(
      "[config] RESEND_API_KEY is not set — email sending is disabled. " +
        "Add it to server/.env to enable real delivery.",
    );
  }
  if (!config.toEmail) {
    console.info(
      "[config] TO_EMAIL is not set — the academy will not receive a copy " +
        "(the visitor still gets their confirmation email).",
    );
  }
}

module.exports = { config, isEmailConfigured, logConfigWarnings };
