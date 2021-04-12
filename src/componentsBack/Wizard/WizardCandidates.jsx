import React, { useContext } from 'react'
import { Route, Link } from 'react-router-dom'
import './Wizard.scss'

import ListOfCandidates from '../ListOfCandidates'
import { listReportsContext } from "../../App"


const WizardCandidates = (props) => {
    const listReports = useContext(listReportsContext)


    return (
        <>
            <div className="WizardCandidates">
                <div className="divlista">
                    <span>1</span> <b>Select Candidate</b>
                </div>
                <div className="divlista">
                    <span>2</span> Select Company
                </div>
                <div className="divlista">
                    <span>3</span> Fill Report Details
                </div>
            </div>
            <div className='listWithSearch'>
                <ListOfCandidates nameCandidate={props.nameCandidate} />
                <Link to='/wizard/wizardCompany'><button className="nextbutton">Next</button></Link>
            </div>
        </>
    )
}

export default WizardCandidates