import React, { useState, useContext } from 'react'
import './Wizard.scss'
import HeaderBack from "../HeaderBack"
import { Link, Route, Switch, Redirect } from 'react-router-dom'
import WizardCompany from './WizardCompany'
import WizardCandidates from './WizardCandidates'
import WizardFullReport from './WizardFullReport'
import { loginContext } from '../../App'


const Wizard = props => {
    const { token } = useContext(loginContext)

    const [candName, setCandName] = useState(localStorage.getItem('getName') || '')
    const [companyName, setCompanyName] = useState(localStorage.getItem('getCompany') || '')
    const [phase, setPhase] = useState('')
    const [status, setStatus] = useState('')
    const [text, setText] = useState('')
    const [date, setDate] = useState(new Date());
    console.log(props)

    const nameCandidate = (name) => {
        localStorage.setItem('getName', name)
        setCandName(name)
    }

    const nameCompany = (company) => {
        localStorage.setItem('getCompany', company)
        setCompanyName(company)
    }


    const reportSet = () => {




        fetch('http://localhost:3333/api/reports/',
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(
                    {
                        id: 61646703,
                        candidateId: 66318927,
                        candidateName: candName,
                        companyId: 11081915,
                        companyName: companyName,
                        interviewDate: date,
                        phase: phase,
                        status: status,
                        note: status,
                    }
                )
            }

        )
            .then(res => res.json())

    }


    return (
        <>
            <HeaderBack logOut={props.logOut} />
            <div className="wizardreport">
                <input type='text' placeholder='Search' onChange={(e) => props.searchReport(e.target.value)} />
                <Link to="/backEnd"> <button>Report</button></Link>
            </div>
            <hr></hr>
            {!token ? <Redirect to='/'></Redirect > :
                <div className='Wizard'>
                    <Switch >
                        <Route exact path='/wizard'> <WizardCandidates nameCandidate={nameCandidate} /></Route>
                        <Route exact path='/wizard/wizardCompany'>  <WizardCompany name={candName} nameCompany={nameCompany} /></Route>
                        <Route exact path='/wizard/WizardFullReport'>
                            <WizardFullReport
                                nameComp={companyName}
                                name={candName}
                                setPhase={setPhase}
                                setStatus={setStatus}
                                setText={setText}
                                setDate={setDate}
                                date={date}
                                reportSet={reportSet}
                            /></Route>
                    </Switch>
                </div>
            }
        </>
    )
}

export default Wizard
