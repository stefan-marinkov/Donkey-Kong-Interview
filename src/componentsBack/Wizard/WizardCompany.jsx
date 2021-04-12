import React, { useContext } from 'react'
import './Wizard.scss'


import { Link } from 'react-router-dom'
import Company from '../Company'
import { listCompanyContext } from "../../App"


const WizardCompany = (props) => {
    const listCompany = useContext(listCompanyContext)


    return (
        <>
            <div className="WizardCompany">
                <ol>
                    <li>
                        Select Candidate
                    </li>
                    <li>
                        <b>Select Company</b>
                    </li>
                    <li>
                        Fill Report Details
            </li>
                    <div>
                        <h3>Candidate:</h3>
                        <p>{props.name}</p>
                    </div>
                </ol>
            </div>
            <div className='listWithSearchCompany'>
                <div className='search'><input type='text' placeholder='Search' /></div>
                <div className='listComp'>
                    {
                        listCompany.map(comp => {
                            return <Company {...comp} nameCompany={props.nameCompany} />
                        })
                    }
                    <Link to='/wizard'><button>Prev</button></Link>
                    <Link to='/wizard/wizardFullReport'><button>Next</button></Link>
                </div>
            </div>
        </>
    )
}

export default WizardCompany