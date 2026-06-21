// Aggregates every feature router under the /api namespace (mounted in app.js).
const express = require("express");
const mailRoutes = require("./mail.routes");

const router = express.Router();

router.use("/", mailRoutes);

module.exports = router;
