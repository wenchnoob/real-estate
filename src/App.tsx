import React from 'react';
import './App.css';
import './components/navbar';
import NavBar from "./components/navbar";
import Home from './components/home';
import HouseView from "./components/house_view";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


function App() {
  return (
      <div className="App">
          <Router>
              <Switch>
                  <Route path="/houses">
                      <HouseView/>
                  </Route>
                  <Route path="/admin">
                      <NavBar/>
                  </Route>
                  <Route path="/">
                      <Home />
                  </Route>
              </Switch>

          </Router>
    </div>
  );
}

export default App;
