const { Sequelize, Games, Teams, Players } = require("./db");

const addNewGame = gameObj => Games.create(gameObj);
const getGameCodes = () => Games.findAll();
const getGame = gameCode => Games.findOne({ where: { accessCode: gameCode } });
const updatePlayers = gameId => Games.increment('numOfPlayers', { where: { id: gameId } });
const getNumOfPlayers = gameId => Games.findOne({ where: { id: gameId } });

module.exports = {
  addNewGame,
  getGameCodes,
  getGame,
  updatePlayers,
  getNumOfPlayers,
};
