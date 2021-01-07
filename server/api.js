// const { app } = require("./index");
const { Router } = require("express");

const {
  addNewGame,
  getGameCodes,
} = require("./queries");

const route = Router();

route.post("/newGame", (req, res) => {
  const gameObj = req.body;
  addNewGame(gameObj)
    .then(data => res.status(201).send(data))
    .catch(err => res.status(500).send(err));
});

route.get("/gameCodes", (req, res) => {
  getGameCodes()
    .then(games => res.status(200).send(games))
    .catch(err => res.status(500).send(err));
});

module.exports = {
  route,
}
