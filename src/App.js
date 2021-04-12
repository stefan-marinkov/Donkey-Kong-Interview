
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
export const loginContext = React.createContext([])
export const candidatFrontContext = React.createContext([])

const { Provider: ListCandidatesProvider } = listCandidatesContext
const { Provider: ListReportsProvider } = listReportsContext
const { Provider: ListCompanyProvider } = listCompanyContext
const { Provider: LoginContextProvider } = loginContext
const { Provider: CandidatFrontProvider } = candidatFrontContext


function App() {

  let filterRepo;

  const [listCandidates, setListCandidates] = useState([]);
  const [listCompanies, setListCompanies] = useState([]);
  const [listReports, setListReports] = useState([]);
  const [value, setValue] = useState('')
  const [id, setId] = useState(null)
  const [token, setToken] = useState('')
  console.log(token)

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
      method: 'DELETE',
      headers: {
        Authorization: ` Bearer ${token}`
      }
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

  const logIn = (email, password) => {
    console.log(email, password)
    fetch('http://localhost:3333/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        // Authorization: 'Bearer <USER ACCESS TOKEN>',
      })
    }).then(results => results.json())
      .then(data => {
        if (data.accessToken)
          setToken(data)
      })

  }

  const logOut = () => {
    setToken('')
  }

  return (
    <div className="App">
      <LoginContextProvider value={{ logIn, token }}>
        <ListCompanyProvider value={listCompanies} >
          < ListReportsProvider value={listReports}>
            <ListCandidatesProvider value={listCandidates} >
              <CandidatFrontProvider value={{ oneCandidate, candidateReport }} >

                <Switch>


                  <Route exact path='/'><FrontEndPage can={listCandidates} setId={setId} logIn={logIn} /></Route>
                  <Route path="/candidatinfo/:id" >
                    <CandidatFront
                      infoCandidates={oneCandidate}
                      oneReport={candidateReport}
                    /></Route>
                  <Route path="/Login" component={Login}></Route>
                  <Route exact path='/backEnd'>
                    <BackEndPage
                      report={filterRepo}
                      deleteReport={deleteReport}
                      searchReport={searchReport}
                      logOut={logOut}
                    /></Route>

                  <Route path="/wizard"><Wizard list={listCandidates} listCompany={listReports} /></Route>



                </Switch>

              </CandidatFrontProvider>
            </ListCandidatesProvider>
          </ListReportsProvider>
        </ListCompanyProvider>
      </LoginContextProvider>
    </div >
  );
}
export default App;
