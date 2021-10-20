import React from 'react';
import './App.css';
import './components/navbar';
import Home from './components/home';
import HouseView from "./components/house_view";
import Admin from "./components/admin";
import {BrowserRouter as Router, Switch, Route, useParams, useLocation} from "react-router-dom";


function App() {
    let query = useQuery();

    return (
      <div className="App">
          <Router>
              <Switch>
                  <Route path="/:to" children={<GetPage to={query.get('to') || ''}/>} />
              </Switch>
          </Router>
    </div>
  );
}

function useQuery() {
    return new URLSearchParams(useLocation().search);
}


const GetPage = ({ to }: {to: string}) => {
    const params: {to: string} = useParams();
    console.log('params', params);
    console.log('to', to);
    let jsx = <h1>Error</h1>;

    switch (to) {
        case "":
            jsx = (
                <Home/>
            );
            break;
        case "houses" || "?to=houses":
            jsx = (
                <HouseView/>
            );
            break;
        case "?to=admin" || "admin":
            jsx = (
                <Admin/>
            );
            break;
    }
    return jsx;
}

export default App;
