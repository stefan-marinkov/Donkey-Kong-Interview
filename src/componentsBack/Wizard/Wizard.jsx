import React from 'react'
import './Wizard.scss'
import HeaderBack from "../HeaderBack"
import { Link, Route, Switch } from 'react-router-dom'
import WizardCompany from './WizardCompany'
import WizardCandidates from './WizardCandidates'
const Wizard = props => {
    return (
        <>
            <HeaderBack />
            <div className='Wizard'>

                <Switch >
                    <Route exact path='/wizard'> <WizardCandidates list={props.list} /></Route>
                    <Route exact path='/wizard/wizardCompany'>  <WizardCompany listCompany={props.listCompany} /></Route>
                </Switch>

            </div>
        </>
    )
}

export default Wizard
