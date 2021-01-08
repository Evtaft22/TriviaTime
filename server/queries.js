const { Games, Teams, Players } = require("./db");

const addNewGame = gameObj => Games.create(gameObj);
const getGameCodes = () => Games.findAll();
const getGame = gameCode => Games.findOne({ where: { accessCode: gameCode } });

module.exports = {
  addNewGame,
  getGameCodes,
  getGame,
};
