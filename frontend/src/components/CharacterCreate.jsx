import React, { useState } from "react";
import "/styles/CharacterCreate.css";
import { FormControl, Input, InputLabel, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import av1 from "../../avatars/av1.png";
import av2 from "../../avatars/av2.png";
import av3 from "../../avatars/av3.png";
import av4 from "../../avatars/av4.png";
import av5 from "../../avatars/av5.png";
import av6 from "../../avatars/av6.png";
import av7 from "../../avatars/av7.png";
import av8 from "../../avatars/av8.png";
import av9 from "../../avatars/av9.png";
import av10 from "../../avatars/av10.png";
import av11 from "../../avatars/av11.png";
import av12 from "../../avatars/av12.png";
import av13 from "../../avatars/av13.png";
import av14 from "../../avatars/av14.png";
import av15 from "../../avatars/av15.png";
import av16 from "../../avatars/av16.png";
import av17 from "../../avatars/av17.png";
import av18 from "../../avatars/av18.png";
import av19 from "../../avatars/av19.png";
import av20 from "../../avatars/av20.png";

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
  avatar: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
}));

const CharacterCreate = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [playerPic, setPlayerPic] = useState("");

  const onAvatarSelect = (e) => {
    setPlayerPic(e.target.src);
    console.log(playerPic);
  };

  return (
    <div className="characterCreate">
      <FormControl className={classes.formControl}>
        <InputLabel
          className={classes.inputLabel}
          variant="outlined">
            Name
        </InputLabel>
        <Input
          className={classes.input}
          placeholder="Enter Player Name"
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
        <h1>Image</h1>
        <div className="avatar__row">
          <Avatar alt="O" src={av15} onClick={onAvatarSelect} className={classes.avatar} />
          <Avatar alt="B" src={av2} onClick={onAvatarSelect} className={classes.avatar} />
          <Avatar alt="D" src={av4} onClick={onAvatarSelect} className={classes.avatar} />
          <Avatar alt="Q" src={av17} onClick={onAvatarSelect} className={classes.avatar} />
          <Avatar alt="K" src={av11} onClick={onAvatarSelect} className={classes.avatar} />
        </div>
        <div className="avatar__row">
          <Avatar alt="G" src={av7} onClick={onAvatarSelect} className={classes.avatar} />
          <Avatar alt="R" src={av18} onClick={onAvatarSelect} className={classes.avatar} />
          <Avatar alt="I" src={av9} onClick={onAvatarSelect} className={classes.avatar} />
          <Avatar alt="J" src={av10} onClick={onAvatarSelect} className={classes.avatar} />
          <Avatar alt="T" src={av20} onClick={onAvatarSelect} className={classes.avatar} />
        </div>
        <div className="avatar__row">
          <Avatar alt="A" src={av1} onClick={onAvatarSelect} className={classes.avatar} />
          <Avatar alt="L" src={av12} onClick={onAvatarSelect} className={classes.avatar} />
          <Avatar alt="M" src={av13} onClick={onAvatarSelect} className={classes.avatar} />
          <Avatar alt="F" src={av6} onClick={onAvatarSelect} className={classes.avatar} />
          <Avatar alt="N" src={av14} onClick={onAvatarSelect} className={classes.avatar} />
        </div>
        <div className="avatar__row">
          <Avatar alt="P" src={av16} onClick={onAvatarSelect} className={classes.avatar} />
          <Avatar alt="H" src={av8} onClick={onAvatarSelect} className={classes.avatar} />
          <Avatar alt="C" src={av3} onClick={onAvatarSelect} className={classes.avatar} />
          <Avatar alt="E" src={av5} onClick={onAvatarSelect} className={classes.avatar} />
          <Avatar alt="S" src={av19} onClick={onAvatarSelect} className={classes.avatar} />
        </div>
      </FormControl>
    </div>
  );
};

export default CharacterCreate;
