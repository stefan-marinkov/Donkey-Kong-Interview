import React, { useContext, useState } from 'react'
import { Route, Link } from 'react-router-dom'
import './Wizard.scss'

import ListOfCandidates from '../ListOfCandidates'
import { listCandidatesContext } from "../../App"


const WizardCandidates = (props) => {
    const listCandidates = useContext(listCandidatesContext)
    const [value, setValue] = useState('')

    console.log(value)

    const searchReportCandidates = (name) => {
        setValue(name)
    }

    let filterName = listCandidates.filter(r => r.name.toLowerCase().includes(value.toLowerCase()))

    console.log(filterName)

    return (
        <>
            <div>
                <div className="divsearch">
                    <input type='text' placeholder='Search' onChange={(e) => searchReportCandidates(e.target.value)} />
                    <div className="buttons">
                        <Link to="/backEnd" className="linkReport"> <button className="btnReport">Report</button></Link>
                    </div>
                </div>
                <div className="flexrow">
                    <div className="WizardCandidates">
                        <div className='divliste'>
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

                    </div>
                    <div className='listWithSearch'>
                        <ListOfCandidates candidates={filterName} nameCandidate={props.nameCandidate} candidateId={props.candidateId} candId={props.candId} />
                        <Link to='/wizard/wizardCompany'><button className="nextbutton">Next</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WizardCandidates