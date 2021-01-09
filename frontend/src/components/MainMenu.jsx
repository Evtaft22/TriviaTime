import React, { useState, useEffect } from "react";
import axios from "axios";

const MainMenu = (props) => {
  const { url, accessCode, numOfQuestions, category, difficulty, gameId } = props.location.state;
  const [players, setPlayers] = useState(0);

  useEffect(() => {
    axios.get(`/api/getNumOfPlayers/${gameId}`)
      .then(game => setPlayers(game.data.numOfPlayers))
      .catch(err => console.error("could not get the number of players.", err));
  }, [players]);

  return (
    <div className="main__menu">
      <h1 className="main__menu__header">Main Menu</h1>
      <h2 className="main__menu__category">{category}</h2>
      <h2 className="main__menu__score">
        {`Best Out Of ${numOfQuestions},000 Score`}
      </h2>
      <h2 className="main__menu__difficulty">
        {`${difficulty[0].toUpperCase()}${difficulty.slice(1)}`}
      </h2>
      <h2 className="main__menu__players">
        {`Players: ${players}`}
      </h2>
      
      {/* <TeamDisplay />
          teams with members
          No Functionality */}

      <h2 className="main__menu__code">{accessCode}</h2>

      {/* must be able to read when the
        host clicks the "start game" button
        redirect to the rules page before each game */}

    </div>
  );
};

export default MainMenu;
