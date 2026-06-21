const rateLimit = require("express-rate-limit");

// Throttle submissions per IP to blunt spam / abuse of the mail endpoints.
const submitLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 5, // 5 submissions per window per IP
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    error: "Too many submissions. Please try again in a few minutes.",
  },
});

module.exports = { submitLimiter };
