const { Games, Teams, Players } = require("./db");

const addNewGame = gameObj => Games.create(gameObj);
const getGameCodes = () => Games.findAll();

module.exports = {
  addNewGame,
  getGameCodes,
};
