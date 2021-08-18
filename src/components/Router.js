import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MainScreen from './MainScreen'
import Matrix from './Matrix'

export default function App() {

  return (
    <Router>
        <Switch>
            <Route path="/matrix">
                <Matrix />
            </Route>
            <Route path="/">
                <MainScreen />
            </Route>
        </Switch>
    </Router>
  );
}
