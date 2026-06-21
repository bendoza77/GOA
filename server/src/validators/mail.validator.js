const { z } = require("zod");

// Reusable field rules. Trimming + hard length caps keep payloads bounded and
// block obviously malformed input before it ever reaches Resend.
const name = z.string().trim().min(1, "Name is required").max(120);
const email = z
  .string()
  .trim()
  .min(3)
  .max(254)
  .email("A valid email is required");
const shortText = z.string().trim().max(120).optional().default("");
const longText = z.string().trim().max(5000).optional().default("");

// Honeypot: a hidden field real users never fill. It must pass validation
// (so we can answer 200 and not tip off the bot) — the controller inspects
// it and silently drops any submission where it is non-empty.
const honeypot = z.string().max(256).optional().default("");

const contactSchema = z.object({
  name,
  email,
  topic: shortText,
  message: z.string().trim().min(1, "Message is required").max(5000),
  company: honeypot,
});

const applySchema = z.object({
  fullname: name,
  email,
  program: shortText,
  experience: shortText,
  motivation: longText,
  company: honeypot,
});

/** Run a schema, returning either `{ data }` or `{ errors }` (field → message). */
function validate(schema, payload) {
  const result = schema.safeParse(payload ?? {});
  if (result.success) return { data: result.data };
  const errors = {};
  for (const issue of result.error.issues) {
    const key = issue.path.join(".") || "_";
    if (!errors[key]) errors[key] = issue.message;
  }
  return { errors };
}

module.exports = { contactSchema, applySchema, validate };
