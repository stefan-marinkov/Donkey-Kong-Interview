
import React, { useEffect, useState } from 'react'

import './App.scss';
import FrontEndPage from './page/FrontEndPage'
import BackEndPage from './page/BackEndPage'
import Wizard from './componentsBack/Wizard'

import { Route, Switch } from 'react-router-dom'
import CandidatFront from './componentsFront/CandidatFront'
import Login from './componentsFront/Login/Login';

export const listCandidatesContext = React.createContext([])
export const listReportsContext = React.createContext([])
export const listCompanyContext = React.createContext([])

const { Provider: ListCandidatesProvider } = listCandidatesContext
const { Provider: ListReportsProvider } = listReportsContext
const { Provider: ListCompanyProvider } = listCompanyContext


function App() {

  let filterRepo;

  const [listCandidates, setListCandidates] = useState([]);
  const [listCompanies, setListCompanies] = useState([]);
  const [listReports, setListReports] = useState([]);
  const [value, setValue] = useState('')
  const [id, setId] = useState(null)

  console.log(listReports)

  const companies = '/companies'
  const candidates = '/candidates'
  const reports = '/reports'
  const users = '/users'
  const baseUrl = 'http://localhost:3333/api'

  useEffect(() => {
    fetch(baseUrl + reports)
      .then(res => res.json())
      .then(data => setListReports(data))
  }, []);

  useEffect(() => {
    fetch(baseUrl + companies)
      .then(res => res.json())
      .then(data => setListCompanies(data))
  }, []);

  useEffect(() => {
    fetch(baseUrl + candidates)
      .then(res => res.json())
      .then(data => setListCandidates(data))

  }, [])

  const deleteReport = (id) => {
    const repo = listReports.filter(e => e.id !== id)
    setListReports(repo)
    fetch(baseUrl + reports + `/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
  }

  const searchReport = (target) => {
    setValue(target)
  }

  filterRepo = listReports.filter(r => r.candidateName.toLowerCase().includes(value.toLowerCase()))


  let oneCandidate = [];
  oneCandidate = listCandidates.filter(c => c.id === id)

  let candidateReport = [];
  candidateReport = listReports.filter(c => c.candidateId === id)

  return (
    <div className="App">
      <ListCompanyProvider value={listCompanies} >
        < ListReportsProvider value={listReports}>
          <ListCandidatesProvider value={listCandidates} >
            <Switch>
              <Route exact path='/'><FrontEndPage can={listCandidates} setId={setId} /></Route>
              <Route path="/candidatinfo/:id" ><CandidatFront
                infoCandidates={oneCandidate}
                oneReport={candidateReport}
              /></Route>
              <Route path="/Login" component={Login}></Route>
              <Route exact path='/backEnd'>
                <BackEndPage
                  report={filterRepo}
                  deleteReport={deleteReport}
                  searchReport={searchReport}
                /></Route>

              <Route path="/wizard"><Wizard list={listCandidates} listCompany={listReports} /></Route>
            </Switch>
          </ListCandidatesProvider>
        </ListReportsProvider>
      </ListCompanyProvider>
    </div >
  );
}

export default App;
