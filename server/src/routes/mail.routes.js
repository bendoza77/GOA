const express = require("express");
const { submitLimiter } = require("../middlewares/rateLimit.middleware");
const mailController = require("../controllers/mail.controller");

const router = express.Router();

router.post("/contact", submitLimiter, mailController.contact);
router.post("/apply", submitLimiter, mailController.apply);

module.exports = router;
