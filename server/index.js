require("dotenv").config();
const express = require("express");
const http = require('http');
const path = require("path");

const PORT = process.env.PORT || 3000;
const CLIENT_PATH = path.join(__dirname, "../dist");

const app = express();
app.use(express.json());
app.use(express.static(CLIENT_PATH));
const server = http.createServer(app);

app.get("*", (req, res) => {
  res.sendFile(`${CLIENT_PATH}/index.html`);
});

server.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});