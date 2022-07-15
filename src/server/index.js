const express = require("express");
const path = require("path");
const compression = require("compression");
const helmet = require("helmet");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

const { PORT = 3001 } = process.env;

app
  .use(express.json())
  .use(compression())
  .use(helmet())
  .use(express.static("dist/client"))
  .use("/api/v1", (req, res) => res.status(200).send("accessed api"))
  .get("*", (_req, res) => {
    res.sendFile(path.join(__dirname, "client/index.html"));
  })
  .listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
  });
