
import './App.css';
import React from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Appbar from './tabs/Appbar';
import Log   from './tabs/Log'
function App() {
  return (
    <div >
      <BrowserRouter>
          <Switch>
            <Route exact path="/"><Log /></Route>
            <Route path="/Appbar"><Appbar /></Route> 
           
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
