"use strict";

function notFound(req, res) {
  res.status(404).json({ error: "Not found." });
}

// Final error handler. Never leaks stack traces or internals to the client;
// only errors explicitly marked `expose` (or 4xx) reveal their message.
// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  const status = err.status || 500;
  const safeMessage =
    err.expose || (status >= 400 && status < 500)
      ? err.message
      : "Something went wrong. Please try again later.";

  if (status >= 500) {
    console.error("[error]", err);
  }

  res.status(status).json({
    error: safeMessage,
    ...(err.fields ? { fields: err.fields } : {}),
  });
}

module.exports = { notFound, errorHandler };
