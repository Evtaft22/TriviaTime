import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "/styles/App.css";
import Home from "./Home.jsx";
import CreateGame from "./CreateGame.jsx";
import JoinGame from "./JoinGame.jsx";

const App = () => {
  return (
    <Router>
      <Switch>
          <Route exact={true} path="/" render={() => <Home />} />
          <Route exact={true} path="/createGame" render={() => <CreateGame />} />
          <Route exact={true} path="/joinGame" render={() => <JoinGame />} />
      </Switch>
    </Router>
  );
};

export default App;
