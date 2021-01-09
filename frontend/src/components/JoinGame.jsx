import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "/styles/JoinGame.css";
import { Button, InputLabel, Input, FormControl } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// members on team are linked
// only one answer per team per question
// all members must decide unanimously on an answer
// before time runs out





const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
    minWidth: 320,
  },
  inputLabel: {
    fontSize: 25,
  },  
  input: {
    width: 400,
  },
  button: {
    backgroundColor:"#2abfda",
    color: "white",
    marginTop: 20,
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: `${1.5}rem`,
  }
}));

const JoinGame = () => {
  const classes = useStyles();
  const [games, setGames] = useState([]);
  const [codes, setCodes] = useState([]);
  const [gameId, setGameId] = useState(0);
  const [inputCode, setInputCode] = useState("");
  const [validCode, setValidCode] = useState(false);

  useEffect(() => {
    axios.get("/api/gameCodes")
      .then(games => {
        setGames(games.data);
        const gameCodes = [];
        games.data.forEach(gameObj => gameCodes.push(gameObj.accessCode));
        setCodes(gameCodes);
      })
      .catch(err => console.error("Could not fetch gameCodes.", err));
  }, []);

  const join = (() => {
    if (inputCode === "") {
      alert("You must enter a game code.");
    } else {
      const exists = codes.includes(inputCode);
      if (exists) {
        games.forEach(gameObj => {
          if (gameObj.accessCode === inputCode) {
            setGameId(gameObj.id);
          }
        });
        setValidCode(true);
      } else {
        alert("*Invalid Access Code* Try again.");
      }
    }
  });

  return (
    !validCode ? (
      <div className="join">
        <h1 className="join__header">Join A Game</h1>
        <FormControl className={classes.formControl}>
          <InputLabel
              className={classes.inputLabel}
              variant="outlined">
                Enter Game Code To Play
            </InputLabel>
            <Input
              className={classes.input}
              placeholder="Code"
              onChange={(e) => setInputCode(e.target.value)}
              type="text"
            />
          <Button
            variant="contained"
            onClick={join}
            className={classes.button}>
              Join Game
          </Button>
        </FormControl>
      </div>
    ) : (
      <Redirect to={`/mobileMenu/${gameId}`} />
    )
  );
};

export default JoinGame;
