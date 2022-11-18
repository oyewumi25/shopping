
import './App.css';
import React from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Appbar from './tabs/Appbar';
import Login from './tabs/Login';
import Robes from './tabs/Robes';


function App() {
  return (
    <div>
      <BrowserRouter>
          <Switch>
            <Route exact path="/"><Login /></Route>
            <Route path="/Robes"><Robes/></Route> 
           
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
