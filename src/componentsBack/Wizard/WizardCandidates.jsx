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
                <ol>
                    <li>
                        <b>Select Candidate</b>
                    </li>
                    <li>
                        Select Company
                        </li>
                    <li>
                        Fill Report Details
                        </li>
                </ol>


            </div>
            <div className='listWithSearch'>

                <div className='search'><input type='text' placeholder='Search' /></div>

                <ListOfCandidates nameCandidate={props.nameCandidate} />
                <Link to='/wizard/wizardCompany'><button>Next</button></Link>
            </div>
        </>
    )
}

export default WizardCandidates