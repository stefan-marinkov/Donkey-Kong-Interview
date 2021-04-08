
import React, { useEffect, useState } from 'react'

import './App.scss';
import FrontEndPage from './page/FrontEndPage'
import BackEndPage from './page/BackEndPage'
import { Route, Switch } from 'react-router-dom'

function App() {


  const [listCandidates, setListCandidates] = useState([]);
  const [listCompanies, setListCompanies] = useState([]);
  const [listReports, setListReports] = useState([]);

  console.log(listCandidates, listCompanies, listReports)

  console.log(listCandidates)

  const companies = '/companies'
  const candidates = '/candidates'
  const reports = '/reports'
  const users = '/users'
  const baseUrl = 'http://localhost:3333/api'

  useEffect(() => {

    if (!reports) {
      fetch(baseUrl + reports)
        .then(res => res.json())
        .then(data => setListReports(data))

    } else {
      fetch(baseUrl + candidates)
        .then(res => res.json())
        .then(data => setListCandidates(data))
    }
  }, [reports]);
  return (
    <div className="App">
      <Route exact path='/'><FrontEndPage can={listCandidates} /></Route>
      <Route exact path='/backEnd'><BackEndPage /></Route>
    </div >
  );
}







export default App;
