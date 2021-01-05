import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "/styles/App.css";
import Home from "./Home.jsx";
import CreateGame from "./CreateGame.jsx";
import JoinGame from "./JoinGame.jsx";
import MainMenu from "./MainMenu.jsx";

const App = () => {
  return (
    <Router>
      <Switch>
          <Route exact={true} path="/" render={() => <Home />} />
          <Route exact={true} path="/createGame" render={() => <CreateGame />} />
          <Route exact={true} path="/joinGame" render={() => <JoinGame />} />
          <Route exact={true} path="/mainMenu" render={(props) => <MainMenu {...props} />} />
      </Switch>
    </Router>
  );
};

export default App;
