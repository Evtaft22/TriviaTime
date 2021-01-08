import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { FormControl, InputLabel, Select, MenuItem, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import "/styles/CreateGame.css";
import "regenerator-runtime/runtime";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
    minWidth: 320,
  },
  button: {
    backgroundColor:"#2abfda",
    color: "white",
    marginTop: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 90,
    paddingRight: 90,
    fontSize: `${1.5}rem`,
  },
  select: {
    minWidth: 500,
    minHeight: 65,
  }
}));

const catObj = {
  9: "General Knowledge",
  10: "Books",
  11: "Films",
  12: "Music",
  13: "Musicals And Theaters",
  14: "Television",
  15: "Video Games",
  16: "Board Games",
  17: "Science And Nature",
  18: "Computers",
  19: "Mathematics",
  20: "Mythology",
  21: "Sports",
  22: "Geography",
  23: "History",
  24: "Politics",
  25: "Art",
  26: "Celebrities",
  27: "Animals",
  28: "Vehicles",
  29: "Comics",
  30: "Gadgets",
  31: "Anima And Manga",
  32: "Cartoons And Animations",
}

const CreateGame = () => {
  const classes = useStyles();
  const [url, setUrl] = useState("");
  const [accessCode, setAccessCode] = useState("");
  const [numOfQuestions, setNumOfQuestions] = useState("");
  const [category, setCategory] = useState("");
  const [catVal, setCatVal] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [validURL, setValidURL] = useState(false);
  const [gameId, setGameId] = useState(0);

  useEffect(() => {
    let code = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const charLen = characters.length;
    for (let i = 0; i < 5; i++) {
      code += characters.charAt(Math.floor(Math.random() * charLen));
    };
    setAccessCode(code);
  }, []);

  useEffect(() => {
    if (catVal === "" && difficulty === "") {
      setUrl(`https://opentdb.com/api.php?amount=${numOfQuestions}`);
    } else if (catVal === "") {
      setUrl(`https://opentdb.com/api.php?amount=${numOfQuestions}&difficulty=${difficulty}`);
    } else if (difficulty === "") {
      setUrl(`https://opentdb.com/api.php?amount=${numOfQuestions}&category=${catVal}`);
    } else {
      setUrl(`https://opentdb.com/api.php?amount=${numOfQuestions}&category=${catVal}&difficulty=${difficulty}`);
    }
  }, [numOfQuestions, catVal, difficulty]);

  const handleCategory = (e) => {
    setCatVal(e.target.value);
    for (let cat in catObj) {
      if (cat == e.target.value) {
        setCategory(catObj[cat]);
      }
    }
  };

  const addNewGame = () => {
    const gameObj = {
      url,
      accessCode,
      numOfQuestions,
      category,
      difficulty,
    };
    if (numOfQuestions === "") {
      alert("You must decide how long you want to play.");
    } else {
      axios.post("/api/newGame", gameObj)
        .then(() => axios.get(`/api/getGame/${accessCode}`)
          .then(gameObj => setGameId(gameObj.data.id))
          .catch(err => console.error("Could not get this game's ID.", err)))
        .then(() => setValidURL(true))
        .catch(err => console.error("Could not add the new game.", err));
    }
  };
  
  return (
    !validURL ? (
      <div className="create">
        <div className="create__header">
          <h1>Create A Game</h1>
        </div>
        <FormControl variant="filled" className={classes.formControl}>
          <InputLabel id="length__of__game">Choose Length Of Game</InputLabel>
          <Select
            className={classes.select}
            labelId="length__of__game__select__label"
            id="length__of__game__select"
            value={numOfQuestions}
            onChange={e => setNumOfQuestions(e.target.value)}
          >
            <MenuItem value={10}>10,000 Points</MenuItem>
            <MenuItem value={20}>20,000 Points</MenuItem>
            <MenuItem value={30}>30,000 Points</MenuItem>
            <MenuItem value={40}>40,000 Points</MenuItem>
            <MenuItem value={50}>50,000 Points</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="filled" className={classes.formControl}>
          <InputLabel id="category">Choose Category</InputLabel>
          <Select
            className={classes.select}
            labelId="category__select__label"
            id="category__select"
            value={catVal}
            onChange={handleCategory}
          >
            <MenuItem value="">
              <em>Any</em>
            </MenuItem>
            <MenuItem value={9}>General Knowledge</MenuItem>
            <MenuItem value={10}>Books</MenuItem>
            <MenuItem value={11}>Films</MenuItem>
            <MenuItem value={12}>Music</MenuItem>
            <MenuItem value={13}>Musicals And Theaters</MenuItem>
            <MenuItem value={14}>Television</MenuItem>
            <MenuItem value={15}>Video Games</MenuItem>
            <MenuItem value={16}>Board Games</MenuItem>
            <MenuItem value={17}>Science And Nature</MenuItem>
            <MenuItem value={18}>Computers</MenuItem>
            <MenuItem value={19}>Mathematics</MenuItem>
            <MenuItem value={20}>Mythology</MenuItem>
            <MenuItem value={21}>Sports</MenuItem>
            <MenuItem value={22}>Geography</MenuItem>
            <MenuItem value={23}>History</MenuItem>
            <MenuItem value={24}>Politics</MenuItem>
            <MenuItem value={25}>Art</MenuItem>
            <MenuItem value={26}>Celebrities</MenuItem>
            <MenuItem value={27}>Animals</MenuItem>
            <MenuItem value={28}>Vehicles</MenuItem>
            <MenuItem value={29}>Comics</MenuItem>
            <MenuItem value={30}>Gadgets</MenuItem>
            <MenuItem value={31}>Anima And Manga</MenuItem>
            <MenuItem value={32}>Cartoons And Animations</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="filled" className={classes.formControl}>
          <InputLabel id="difficulty">Choose Difficulty</InputLabel>
          <Select
            className={classes.select}
            labelId="difficulty__select__label"
            id="difficulty__select"
            value={difficulty}
            onChange={e => setDifficulty(e.target.value)}
          >
            <MenuItem value="">
              <em>Any</em>
            </MenuItem>
            <MenuItem value={"easy"}>Easy</MenuItem>
            <MenuItem value={"medium"}>Medium</MenuItem>
            <MenuItem value={"hard"}>Hard</MenuItem>
          </Select>
        </FormControl>
        <Button
          className={classes.button}
          variant="contained"
          onClick={addNewGame}>
            Create Game
        </Button>
      </div>
    ) : (
      <Redirect to={{
        pathname: `/mainMenu/${gameId}`,
        state: {
          url: url,
          accessCode: accessCode,
          numOfQuestions: numOfQuestions,
          category: category,
          difficulty: difficulty,
        }
       }}
      />
    )
  );
};

export default CreateGame;
