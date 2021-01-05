import React from "react";
import "/styles/Home.css";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <h1>It's Trivia Time!</h1>
      </div>
      <Link to="/createGame" className="home__button">
        <Button variant="contained">
          Start Game
        </Button>
      </Link>
      <Link to="/joinGame" className="home__button">
        <Button variant="contained">
          Join Game
        </Button>
      </Link>
    </div>
  );
};

export default Home;
