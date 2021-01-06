require("dotenv").config();
const { Sequelize } = require("sequelize");

const { DB_NAME, DB_HOST, DB_USER } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, "", {
  host: DB_HOST,
  dialect: "postgres",
});

const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log(`Connection to the Database: ${DB_NAME} is successful.`);
  } catch (error) {
    console.error("Could not connect to the database.", error);
  }
};
connect();

const Games = sequelize.define("Games", {
  url: Sequelize.STRING,
  accessCode: Sequelize.STRING,
  numOfQuestions: Sequelize.INTEGER,
  category: Sequelize.INTEGER,
  difficulty: Sequelize.STRING,
});

const Teams = sequelize.define("Teams", {
  name: Sequelize.STRING,
  score: Sequelize.INTEGER,
  id_game: Sequelize.INTEGER,
});

const Players = sequelize.define("Players", {
  name: Sequelize.STRING,
  playerPic: Sequelize.STRING,
  vip: Sequelize.BOOLEAN,
  id_game: Sequelize.INTEGER,
  id_team: Sequelize.INTEGER,
});

const Vips = sequelize.define("Vips", {
  id_game: Sequelize.INTEGER,
  id_player: Sequelize.INTEGER,
});

Games.sync()
  .then(() => {
    Teams.sync()
      .then(() => {
        Players.sync()
          .then(() => {
            Vips.sync();
          })
          .catch((err) => console.error("Could not sync Players: ", err));
      })
      .catch((err) => console.error("Could not sync Teams: ", err));
  })
  .catch((err) => console.error("Could not sync Games: ", err));

  module.exports = {
    sequelize,
    Games,
    Teams,
    Players,
    Vips,
  };
  