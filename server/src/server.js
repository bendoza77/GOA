"use strict";

// Process entry point: wire up the configured app and start listening.
const app = require("./app");
const { config, logConfigWarnings } = require("./config");

logConfigWarnings();

app.listen(config.port, () => {
  console.log(
    `✅ Goa mailer listening on http://localhost:${config.port} (${config.nodeEnv})`,
  );
});

module.exports = app;
