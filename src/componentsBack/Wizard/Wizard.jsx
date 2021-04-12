import React, { useState } from 'react'
import './Wizard.scss'
import HeaderBack from "../HeaderBack"
import { Link, Route, Switch } from 'react-router-dom'
import WizardCompany from './WizardCompany'
import WizardCandidates from './WizardCandidates'
import WizardFullReport from './WizardFullReport'

const Wizard = props => {
    const [candName, setCandName] = useState('')
    const [companyName, setCompanyName] = useState('')

    const nameCandidate = (name) => {
        setCandName(name)
    }

    const nameCompany = (company) => {
        setCompanyName(company)
    }

    return (
        <>
            <HeaderBack />
            <div className="divsearch">
                <h1>Create Report</h1>
                <input type='text' placeholder='Search' onChange={(e) => props.searchReport(e.target.value)} />
            </div>
            <hr></hr>
            <div className='Wizard'>

                <Switch >
                    <Route exact path='/wizard'> <WizardCandidates nameCandidate={nameCandidate} /></Route>
                    <Route exact path='/wizard/wizardCompany'>  <WizardCompany name={candName} nameCompany={nameCompany} /></Route>
                    <Route exact path='/wizard/WizardFullReport'>  <WizardFullReport nameComp={companyName} name={candName} /></Route>
                </Switch>

            </div>
        </>
    )
}

export default Wizard
