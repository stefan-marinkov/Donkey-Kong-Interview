import React, { useEffect, useState } from 'react'
import './App.scss';

import FrontEndPage from './page/FrontEndPage'
import BackEndPage from './page/BackEndPage'


import { Route, Switch } from 'react-router-dom'

const App = () => {

  const report = '/report'
  const companies = '/companies'
  const candidates = '/candidates'
  const users = '/users'
  const baseUrl = 'http://localhost:3333/api'

  useEffect(() => {
    fetch(baseUrl + candidates)
      .then(res => res.json())
      .then(data => console.log(data))
  }, []);


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
