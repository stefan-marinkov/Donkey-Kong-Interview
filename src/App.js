
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

const { Provider: ListCandidatesProvider } = listCandidatesContext
const { Provider: ListReportsProvider } = listReportsContext
const { Provider: ListCompanyProvider } = listCompanyContext
const { Provider: LoginContextProvider } = loginContext

function App() {

  let filterRepo;

  const [listCandidates, setListCandidates] = useState([]);
  const [listCompanies, setListCompanies] = useState([]);
  const [listReports, setListReports] = useState([]);
  const [value, setValue] = useState('')

  const [token, setToken] = useState(localStorage.getItem("localToken") || '')

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
        localStorage.setItem("localToken", data.accessToken)
      })

  }

  const logOut = () => {
    localStorage.removeItem("localToken")
    setToken('')

  }

  return (
    <div className="App">
      <LoginContextProvider value={{ logIn, token }}>
        <ListCompanyProvider value={listCompanies} >
          < ListReportsProvider value={listReports}>
            <ListCandidatesProvider value={listCandidates} >


              <Switch>


                <Route exact path='/'><FrontEndPage can={listCandidates} logIn={logIn} /></Route>
                <Route path="/candidatinfo/:id" render={(props) => <CandidatFront {...props} candidates={listCandidates} reports={listReports} />} ></Route>
                <Route path="/Login" component={Login}></Route>
                <Route exact path='/backEnd'>
                  <BackEndPage
                    report={filterRepo}
                    deleteReport={deleteReport}
                    searchReport={searchReport}
                    logOut={logOut}
                  /></Route>

                <Route path="/wizard">
                  <Wizard
                    list={listCandidates}
                    listCompany={listReports}
                    logOut={logOut}
                    report={filterRepo}
                  /></Route>
              </Switch>


            </ListCandidatesProvider>
          </ListReportsProvider>
        </ListCompanyProvider>
      </LoginContextProvider>
    </div >
  );
}
export default App;
