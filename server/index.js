require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const http = require("http");
require("./db");
const { route } = require("./api");

const PORT = process.env.PORT || 3000;
const PARCEL_PATH = path.join(__dirname, "../dist");

const app = express();
app.use(express.json());
app.use("/api", cors(), route);
app.use(express.static(PARCEL_PATH));
const server = http.createServer(app);

app.get("*", (req, res) => {
  res.sendFile(`${PARCEL_PATH}/index.html`);
});

server.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});

module.exports = {
  app,
};
