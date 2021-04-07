import React, { useState, useEffect } from 'react'
import './App.scss';

import FrontEndPage from './page/FrontEndPage'
import BackEndPage from './page/BackEndPage'

import { Link, Route, Switch } from 'react-router-dom'



function App() {

  const [listCandidates, setListCandidates] = useState([])
  console.log(listCandidates)

  const companies = '/companies'
  const candidates = '/candidates'
  const reports = '/reports'
  const users = '/users'
  const baseUrl = 'http://localhost:3333/api'

  useEffect(() => {
    fetch(baseUrl + users)
      .then(res => res.json())
      .then(data => setListCandidates(data))
  }, [])

  return (
    <div className="App">
      <Route exact path='/'><FrontEndPage /></Route>
      <Route exact path='/Reports'><BackEndPage /></Route>
    </div >
  );
}

export default App;
