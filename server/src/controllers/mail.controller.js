const {
  contactSchema,
  applySchema,
  validate,
} = require("../validators/mail.validator");
const {
  sendContactEmail,
  sendApplicationEmail,
} = require("../services/email.service");

// Build a 400 error carrying per-field messages for the client to display.
function validationError(errors) {
  const err = new Error("Please check the highlighted fields.");
  err.status = 400;
  err.expose = true;
  err.fields = errors;
  return err;
}

// Wrap a (schema, sender) pair into an Express handler so a validated payload
// either sends an email or, if the honeypot was filled, is silently accepted
// (we never tell a bot it failed). Express 5 forwards rejected promises to the
// error handler automatically, so handlers need no explicit try/catch.
function makeHandler(schema, sender) {
  return async (req, res) => {
    const { data, errors } = validate(schema, req.body);
    if (errors) throw validationError(errors);

    if (data.company) {
      // Honeypot tripped — pretend success, send nothing.
      return res.status(200).json({ ok: true });
    }

    const { company, ...payload } = data;
    void company;
    const result = await sender(payload);
    return res.status(200).json({ ok: true, id: result && result.id });
  };
}

const contact = makeHandler(contactSchema, sendContactEmail);
const apply = makeHandler(applySchema, sendApplicationEmail);

module.exports = { contact, apply };
