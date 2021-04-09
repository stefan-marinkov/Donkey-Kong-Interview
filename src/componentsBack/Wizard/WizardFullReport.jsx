import React, { useContext } from 'react'
import './Wizard.scss'

import { Link } from 'react-router-dom'
import { listReportsContext } from '../../App'

const WizardCompany = (props) => {
    const linkReports = useContext(listReportsContext)
    console.log(linkReports)
    return (
        <>
            <div className="WizardCompany">
                <ol>
                    <li>
                        Select Candidate
                    </li>
                    <li>
                        Select Company
                    </li>
                    <li>
                        <b>Fill Report Details</b>
                    </li>
                    <div>
                        <h3>Candidate:</h3>
                        <p>{props.name}</p>
                        <h3>Company:</h3>
                        <p>{props.nameComp}</p>
                    </div>
                </ol>
            </div>
            <div className='listWithSearchCompany'>
                <div className='search'><input type='text' placeholder='Search' /></div>
                <div className='listFullReport'>
                    <div>
                        <h1>Full Report</h1>
                        <p>Napred</p>
                        <p>Nazad</p>
                    </div>
                    <Link to='/wizard/wizardCompany'><button>Prev</button></Link>
                    {/* <Link to='/wizard/wizardFullReport'><button>Next</button></Link> */}
                </div>
            </div>
        </>
    )
}

export default WizardCompany