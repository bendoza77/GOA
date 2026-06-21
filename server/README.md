# Goa-Oriented Academy — Mailer API

Small, hardened Express service that delivers the site's **Contact** and
**Apply** form submissions as real email via [Resend](https://resend.com).

## Setup

```bash
cd server
npm install
cp .env.example .env   # then fill in RESEND_API_KEY and TO_EMAIL
npm run dev            # or: npm start
```

Get an API key at <https://resend.com/api-keys>.

### Who receives the email

The **confirmation email is sent to the visitor's own address** (the email they
type into the form), with a copy of what they submitted. `TO_EMAIL` is now
**optional** — set it only if you also want every submission copied to the
academy inbox (best-effort; its failure never blocks the visitor's email).

> ⚠️ **Resend sandbox limit.** With the default
> `FROM_EMAIL="onboarding@resend.dev"`, Resend only delivers to the email
> address that owns the Resend account. To send confirmations to *any* visitor,
> verify your own domain at <https://resend.com/domains> and set `FROM_EMAIL`
> to an address on it (e.g. `Goa Academy <hello@yourdomain.com>`).

## Endpoints

| Method | Path           | Body                                                   |
| ------ | -------------- | ------------------------------------------------------ |
| GET    | `/health`      | —                                                      |
| POST   | `/api/contact` | `{ name, email, topic?, message }`                     |
| POST   | `/api/apply`   | `{ fullname, email, program?, experience?, motivation? }` |

Each submission sends a confirmation to the visitor's email (`id` is that
message's id) and, if `TO_EMAIL` is set, a best-effort copy to the academy.

Success → `200 { ok: true, id }`. Validation → `400 { error, fields }`.
Rate limited → `429`. Not configured (no API key) → `503`.

## Security notes

- **Input validation** with zod + hard length caps on every field.
- **HTML escaping** of all user input before it enters the email template
  (prevents markup/script injection in the message body).
- **Rate limiting**: 5 submissions per IP per 10 minutes.
- **Honeypot** (`company` field) silently drops bot submissions.
- **CORS allow-list**, **Helmet** security headers, and a **16 kB** body cap.
- Secrets live only in `.env` (git-ignored); errors never leak internals.
