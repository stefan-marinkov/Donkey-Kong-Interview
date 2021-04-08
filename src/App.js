
import React, { useEffect, useState } from 'react'

import './App.scss';
import FrontEndPage from './page/FrontEndPage'
import BackEndPage from './page/BackEndPage'
import Wizard from './componentsBack/Wizard'

import { Route, Switch } from 'react-router-dom'

function App() {

  let filterRepo;

  const [listCandidates, setListCandidates] = useState([]);
  const [listCompanies, setListCompanies] = useState([]);
  const [listReports, setListReports] = useState([]);
  const [value, setValue] = useState('')

  const companies = '/companies'
  const candidates = '/candidates'
  const reports = '/reports'
  const users = '/users'
  const baseUrl = 'http://localhost:3333/api'

  useEffect(() => {
    fetch(baseUrl + candidates)
      .then(res => res.json())
      .then(data => setListCandidates(data))

  }, [])

  const deleteReport = (id) => {
    const repo = listReports.filter(e => e.id !== id)
    setListReports(repo)
  }

  const searchReport = (target) => {
    setValue(target)
  }

  filterRepo = listReports.filter(r => r.candidateName.toLowerCase().includes(value.toLowerCase()))

  useEffect(() => {
    fetch(baseUrl + reports)
      .then(res => res.json())
      .then(data => setListReports(data))
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path='/'><FrontEndPage can={listCandidates} /></Route>
        <Route exact path='/backEnd'>
          <BackEndPage
            report={filterRepo}
            deleteReport={deleteReport}
            searchReport={searchReport}
          /></Route>
        <Route path="/candidatinfo"></Route>
        <Route path="/wizard"><Wizard list={listCandidates} listCompany={listReports} /></Route>
      </Switch>
    </div >
  );
}







export default App;
