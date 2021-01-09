require("dotenv").config();
const { Sequelize } = require("sequelize");

const { DB_NAME, DB_USER, DB_HOST } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, " ", {
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
  category: Sequelize.STRING,
  difficulty: Sequelize.STRING,
  numOfPlayers: Sequelize.INTEGER,
});

const Teams = sequelize.define("Teams", {
  name: Sequelize.STRING,
  score: Sequelize.INTEGER,
  id_game: Sequelize.INTEGER,
  members: Sequelize.INTEGER,
});

const Players = sequelize.define("Players", {
  name: Sequelize.STRING,
  playerPic: Sequelize.STRING,
  // vip: Sequelize.BOOLEAN,
  id_game: Sequelize.INTEGER,
  id_team: Sequelize.INTEGER,
});

// const Vips = sequelize.define("Vips", {
//   id_game: Sequelize.INTEGER,
//   id_player: Sequelize.INTEGER,
// });

Games.sync({ force: true })
  .then(() => {
    Games.bulkCreate([
      {
        url: "https://opentdb.com/api.php?amount=50&category=15&difficulty=medium",
        accessCode: "AA3AA",
        numOfQuestions: 50,
        category: "Video Games",
        difficulty: "medium",
        numOfPlayers: 0,
      }
    ]);
  })
  .then(() => {
    Teams.sync({ force: true })
      .then(() => {
        Teams.bulkCreate([
          {
            name: "Team1",
            score: 10,
            id_game: 1,
            members: 1,
          }
        ]);
      })
      .then(() => {
        Players.sync({ force: true })
          .then(() => {
            Players.bulkCreate([
              {
                name: "Evan",
                playerPic: "avatar1",
                // vip: true,
                id_game: 1,
                id_team: 1,
              }
            ]);
          })
          // .then(() => {
            // Vips.sync({ force: true })
            //   .then(() => {
            //     Vips.bulkCreate([
            //       {

            //       }
            //     ]);
            //   })
            //   .catch(err => console.error("Could not sync Vips: ", err));
          // })
          .catch((err) => console.error("Could not sync Players: ", err));
      })
      .catch((err) => console.error("Could not sync Teams: ", err));
  })
  .catch((err) => console.error("Could not sync Games: ", err));

  module.exports = {
    sequelize,
    Sequelize,
    Games,
    Teams,
    Players,
    // Vips,
  };
  