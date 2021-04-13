import React, { useState, useContext } from 'react'
import './Wizard.scss'
import HeaderBack from "../HeaderBack"
import { Link, Route, Switch, Redirect } from 'react-router-dom'
import WizardCompany from './WizardCompany'
import WizardCandidates from './WizardCandidates'
import WizardFullReport from './WizardFullReport'
import { loginContext } from '../../App'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Wizard = props => {
    const { token, setDataIsValid } = useContext(loginContext)

    const [candName, setCandName] = useState(localStorage.getItem('getName') || '')
    const [companyName, setCompanyName] = useState(localStorage.getItem('getCompany') || '')
    const [phase, setPhase] = useState('')
    const [status, setStatus] = useState('')
    const [text, setText] = useState('')
    const [startDate, setStartDate] = useState(new Date());

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
                        // id: 61646743,
                        // candidateId: 6631437,
                        candidateName: candName,
                        // companyId: 143915,
                        companyName: companyName,
                        interviewDate: startDate,
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
            {!token ? <Redirect to='/'></Redirect > :
                <div className='Wizard'><HeaderBack logOut={props.logOut} />
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
                                setStartDate={setStartDate}
                                startDate={startDate}
                                reportSet={reportSet}
                                setDataIsValid={setDataIsValid}
                            /></Route>
                    </Switch>

                </div>

            }
        </>
    )
}

export default Wizard
