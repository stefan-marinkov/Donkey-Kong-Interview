import React from 'react'
import './App.scss';

import FrontEndPage from './page/FrontEndPage'
import BackEndPage from './page/BackEndPage'

import { Link, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
      <Route path='/home' ><FrontEndPage /></Route>
      <Route path='/home' ><BackEndPage /></Route>
      </Switch>
    </div>
  );
}

export default App;
