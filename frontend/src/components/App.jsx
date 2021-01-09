import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "/styles/App.css";
import Home from "./Home.jsx";
import CreateGame from "./CreateGame.jsx";
import JoinGame from "./JoinGame.jsx";
import MainMenu from "./MainMenu.jsx";
import MobileMenu from "./MobileMenu.jsx";

const App = () => {
  return (
    <Router>
      <Switch>
          <Route exact={true} path="/" render={() => <Home />} />
          <Route exact={true} path="/createGame" render={() => <CreateGame />} />
          <Route exact={true} path="/joinGame" render={() => <JoinGame />} />
          <Route exact={true} path="/mainMenu/:id" render={props => <MainMenu {...props} />} />
          <Route exact={true} path="/mobileMenu/:id" render={({ match }) => <MobileMenu match={match} />} />
      </Switch>
    </Router>
  );
};

export default App;
