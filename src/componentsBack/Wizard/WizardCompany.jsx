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
                <div className="divlista">
                    <span>1</span> Select Candidate
                </div>
                <div className="divlista">
                    <span>2</span> <b>Select Company</b>
                </div>
                <div className="divlista">
                    <span>3</span> Fill Report Details
                </div>
                <div className="line"></div>
                <span className="candidatename">Candidate:</span>
                <div className="candidatediv">
                    {props.name}
                </div>
            </div>
            <div className='listWithSearchCompany'>
                <div className='listComp'>
                    {
                        listCompany.map(comp => {
                            console.log(comp)
                            return <Company {...comp} nameCompany={props.nameCompany} />
                        })
                    }
                    <div className="buttondiv">
                        <Link to='/wizard/wizardFullReport'><button className="nextbuttoncompany">Next</button></Link>
                        <Link to='/wizard'><button className="nextbuttoncompany">Back</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WizardCompany