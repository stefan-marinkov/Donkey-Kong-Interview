import React, { useEffect } from 'react'
import './App.scss';

import FrontEndPage from './page/FrontEndPage'
import BackEndPage from './page/BackEndPage'

import { Link, Route, Switch } from 'react-router-dom'



function App() {

  const companies = '/companies'
  const candidates = '/candidates'
  const reports = '/reports'
  const users = '/users'
  const baseUrl = 'http://localhost:3333/api'

  useEffect(() => {
    fetch(baseUrl + companies)
      .then(res => res.json())
      .then(data => console.log(data))
  })

  return (
    <div className="App">
      <FrontEndPage />
      <BackEndPage />
      <Switch>
        <Route path='/home' ><FrontEndPage /></Route>
        <Route path='/home' ><BackEndPage /></Route>
      </Switch>
    </div>
  );
}

export default App;
