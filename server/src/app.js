"use strict";

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const { config, isEmailConfigured } = require("./config");
const apiRoutes = require("./routes");
const { notFound, errorHandler } = require("./middlewares/error.middleware");

const app = express();

// Security headers + don't advertise the framework.
app.disable("x-powered-by");
app.use(helmet());

// Strict CORS allow-list — only configured origins may call the API.
app.use(
  cors({
    origin(origin, callback) {
      // Allow same-origin / curl / server-to-server requests (no Origin header).
      if (!origin || config.allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      const err = new Error("Origin not allowed by CORS.");
      err.status = 403;
      err.expose = true;
      return callback(err);
    },
    methods: ["GET", "POST", "OPTIONS"],
  }),
);

// Reject oversized bodies early.
app.use(express.json({ limit: "16kb" }));

// Lightweight health/readiness probe.
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    service: "goa-academy-mailer",
    emailConfigured: isEmailConfigured(),
    time: new Date().toISOString(),
  });
});

app.use("/api", apiRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
