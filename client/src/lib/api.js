// Thin client for the Goa mailer backend (see /server).
// Override the base URL at build time with VITE_API_URL.
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

async function postJson(path, body) {
  let res;
  try {
    res = await fetch(`${API_URL}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  } catch {
    // Network / CORS / server-down: surface a friendly, generic failure.
    throw new Error("network");
  }

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const err = new Error(data.error || "request_failed");
    err.fields = data.fields;
    err.status = res.status;
    throw err;
  }
  return data;
}

export const sendContactMessage = (payload) => postJson("/api/contact", payload);
export const sendApplication = (payload) => postJson("/api/apply", payload);
