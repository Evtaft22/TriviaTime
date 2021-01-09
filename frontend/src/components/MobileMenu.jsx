import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCreate from "./CharacterCreate.jsx";


const MobileMenu = ({ match }) => {
  const [numOfPlayers, setNumOfPlayers] = useState(0);
  const gameId = match.params.id;

  useEffect(() => {
    // get request for number of players
    axios.post(`/api/updatePlayers/${gameId}`)
      .then(() => console.log("number of players updated successful."))
      .catch(err => console.error("Could not update number of players.", err));
  }, []);

  return (
    <div className="mobile__menu">
      <h1>Main Mobile Menu</h1>
      <CharacterCreate />
      <h1>Team Select</h1>
      {/* <TeamDisplay />
          teams with members (click team to join) */}
      
      {/* create team button
          limit number of members per team based on numOfPlayers
          limit number of teams based on numOfPlayers
          onClick render <CreateTeam /> form */}

      {/* if (current device is VIP) {
        start game button
       } */}
      
    </div>
  );
};

export default MobileMenu;
