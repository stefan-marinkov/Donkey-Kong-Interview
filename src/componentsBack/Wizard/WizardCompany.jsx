import React, { useContext, useState } from 'react'
import './Wizard.scss'


import { Link } from 'react-router-dom'
import Company from '../Company'
import { listCompanyContext } from "../../App"

const WizardCompany = (props) => {
    const listCompany = useContext(listCompanyContext)

    const [value, setValue] = useState('')


    const searchReportCompany = (name) => {
        setValue(name)
    }

    let filterCompanyName = listCompany.filter(r => r.name.toLowerCase().includes(value.toLowerCase()))

    return (
        <>
            <div>
                <div className="divsearch">
                    <input type='text' placeholder='Search' onChange={(e) => searchReportCompany(e.target.value)} />
                    <div className="buttons">
                        <Link to="/backEnd" className="linkReport"> <button className="btnReport">Report</button></Link>
                    </div>
                </div>
                <div className='flexrow'>
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
                                filterCompanyName.map(comp => {
                                    return <Company {...comp} nameCompany={props.nameCompany} companyId={props.companyId} compId={props.compId} />
                                })
                            }
                            <div className="buttondiv">

                                <Link to='/wizard/wizardFullReport'><button className="nextbuttoncompany">Next</button></Link>
                                <Link to='/wizard'><button className="nextbuttoncompany">Back</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WizardCompany