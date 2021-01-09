const { Router } = require("express");

const {
  addNewGame,
  getGameCodes,
  getGame,
  updatePlayers,
  getNumOfPlayers,
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

route.get("/getGame/:code", (req, res) => {
  const gameCode = req.params.code;
  getGame(gameCode)
    .then(game => res.status(200).send(game))
    .catch(err => res.status(500).send(err));
});

route.post("/updatePlayers/:id", (req, res) => {
  const gameId = req.params.id;
  updatePlayers(gameId)
    .then(data => res.status(201).send(data))
    .catch(err => res.status(500).send(err));
});

route.get("/getNumOfPlayers/:id", (req, res) => {
  const gameId = req.params.id;
  getNumOfPlayers(gameId)
    .then(game => res.status(200).send(game))
    .catch(err => res.status(500).send(err));
});

module.exports = {
  route,
}
