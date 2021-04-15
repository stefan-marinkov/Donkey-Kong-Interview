import React, { useState, useContext } from 'react'
import './Wizard.scss'
import HeaderBack from "../HeaderBack"
import { Link, Route, Switch, Redirect } from 'react-router-dom'
import WizardCompany from './WizardCompany'
import WizardCandidates from './WizardCandidates'
import WizardFullReport from './WizardFullReport'
import { loginContext } from '../../App'
import "react-datepicker/dist/react-datepicker.css";

const Wizard = props => {

    const { token, setDataIsValid } = useContext(loginContext)

    const [candName, setCandName] = useState('')
    const [candId, setCandId] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [compId, setCompId] = useState('')

    const [phase, setPhase] = useState('')
    const [status, setStatus] = useState('')
    const [text, setText] = useState('')
    const [startDate, setStartDate] = useState(new Date())



    const nameCandidate = (name) => {
        //localStorage.setItem('getName', name)
        setCandName(name)
    }

    const nameCompany = (company) => {
        //localStorage.setItem('getCompany', company)
        setCompanyName(company)
    }
    const candidateId = (id) => {
        setCandId(id)
    }

    const companyId = (id) => {
        setCompId(id)

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
                        // id: 1,
                        candidateId: candId,
                        candidateName: candName,
                        companyId: compId,
                        companyName: companyName,
                        interviewDate: startDate.toString(),
                        phase: phase,
                        status: status,
                        note: text,
                    }
                )
            }

        )
            .then(res => res.json())

    }



    return (
        <>
            <HeaderBack logOut={props.logOut} />
            {/* <div className="wizardreport">
                <input type='text' placeholder='Search' onChange={(e) => props.searchReport(e.target.value)} />
            
            </div> */}

            <hr></hr>
            {!token ? <Redirect to='/'></Redirect > :
                <div className='Wizard'>
                    <Switch >
                        <Route exact path='/wizard'> <WizardCandidates nameCandidate={nameCandidate} candidateId={candidateId} candId={candId} /></Route>
                        <Route exact path='/wizard/wizardCompany'>  <WizardCompany name={candName} nameCompany={nameCompany} companyId={companyId} compId={compId} /></Route>
                        <Route exact path='/wizard/WizardFullReport'>
                            <WizardFullReport
                                nameComp={companyName}
                                name={candName}
                                setPhase={setPhase}
                                setStatus={setStatus}
                                setText={setText}
                                setStartDate={setStartDate}
                                startDate={startDate}
                                reportSet={reportSet}
                                setDataIsValid={setDataIsValid}
                                phase={phase}
                                text={text}
                                status={status}
                            /></Route>
                    </Switch>
                </div>
            }
        </>
    )
}

export default Wizard
