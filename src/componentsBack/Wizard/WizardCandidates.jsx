import React from 'react'
import { Route, Link } from 'react-router-dom'

import ListOfCandidates from '../ListOfCandidates'

const WizardCandidates = (props) => {


    return (
        <>
            <div className="wizardCandidates">
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

                <ListOfCandidates list={props.list} />
                <Link to='/wizard/wizardCompany'><button>Next</button></Link>
            </div>
        </>
    )
}

export default WizardCandidates