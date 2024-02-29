const express = require("express");
const app = express();

const rateLimit = require("express-rate-limit");
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

const { port } = require("../../config.json");
const Port = port || 8080;

app.use(limiter);

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.listen(Port, () => {
console.log(`ZeroServer: Server Running in port ${Port}`);
});
