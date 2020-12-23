import React, { useState } from "react";
import "/styles/Create.css";
import { FormControl, InputLabel, Select, MenuItem, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
    minWidth: 320,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const CreateGame = () => {
  const classes = useStyles();
  const [ numOfQuestions, setNumOfQuestions] = useState("");
  const [ category, setCategory] = useState("");
  const [ difficulty, setDifficulty] = useState("");
  const [numOfPlayers, setNumOfPlayers] = useState(0);
  const [url, setUrl] = useState("");

  const handleLengthOfGame = (e) => setNumOfQuestions(e.target.value);
  const handleCategory = (e) => setCategory(e.target.value);
  const handleDifficulty = (e) => setDifficulty(e.target.value);

  const handleUrlChange = () => {
    if (category === "" && difficulty === "") {
      setUrl(`https://opentdb.com/api.php?amount=${numOfQuestions}`);
    } else if (category === "") {
      setUrl(`https://opentdb.com/api.php?amount=${numOfQuestions}&difficulty=${difficulty}`);
    } else if (difficulty === "") {
      setUrl(`https://opentdb.com/api.php?amount=${numOfQuestions}&category=${category}`);
    } else {
      setUrl(`https://opentdb.com/api.php?amount=${numOfQuestions}&category=${category}&difficulty=${difficulty}`);
    }

    console.log(url);
  };

  return (
    <div className="create">
      <div className="create__header">
        <h1>Create A Game</h1>
      </div>
      
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="length__of__game">Choose Length Of Game</InputLabel>
        <Select
          labelId="length__of__game__select__label"
          id="length__of__game__select"
          value={numOfQuestions}
          onChange={handleLengthOfGame}
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
          labelId="category__select__label"
          id="category__select"
          value={category}
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
          labelId="difficulty__select__label"
          id="difficulty__select"
          value={difficulty}
          onChange={handleDifficulty}
        >
          <MenuItem value="">
            <em>Any</em>
          </MenuItem>
          <MenuItem value={"easy"}>Easy</MenuItem>
          <MenuItem value={"medium"}>Medium</MenuItem>
          <MenuItem value={"hard"}>Hard</MenuItem>
        </Select>
      </FormControl>

      <Button variant="contained" onClick={handleUrlChange}>Create Game</Button>
    </div>
  );
};

export default CreateGame;
