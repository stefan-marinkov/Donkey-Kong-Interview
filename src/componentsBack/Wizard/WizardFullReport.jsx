import React, { useContext, useState } from 'react'
import './Wizard.scss'
import DatePicker from 'react-date-picker';

import { Link } from 'react-router-dom'
import { listReportsContext } from '../../App'

const WizardCompany = (props) => {
    //  const linkReports = useContext(listReportsContext)


    return (
        <>
            <div className="WizardCompany">
                <div className="divlista">
                    <span>1</span> Select Candidate
                </div>
                <div className="divlista">
                    <span>2</span> Select Company
                </div>
                <div className="divlista">
                    <span>3</span> <b>Fill Report Details</b>
                </div>
                <div className="line"></div>
                <span className="candidatename">Candidate:</span>
                <div className="candidatediv">
                    {props.name}
                </div>
                <div>
                    <span className="companyname">Company:</span>
                </div>
                <div className="candidatediv">
                    {props.nameComp}
                </div>
            </div>
            <div className='listWithSearchCompany'>

                <div className='listFullReport'>
                    <div>
                        <form>
                            <label>
                                <p>Interview Date:</p>
                                <div>
                                    <DatePicker
                                        onChange={props.setDate}
                                        date={props.date}
                                    />
                                </div>
                            </label>
                            <label>
                                <p>Phase:</p>
                                <select onChange={(e) => props.setPhase(e.target.value)} >
                                    <option></option>
                                    <option value={'hr'}>hr</option>
                                    <option value={'tech'}>tech</option>
                                    <option value={'final'}>final</option>


                                </select>
                            </label>
                            <label>
                                <p>Status:</p>
                                <select onChange={(e) => props.setStatus(e.target.value)}>
                                    <option></option>
                                    <option value={'passed'}>passed</option>
                                    <option value={'declined'}>declined</option>
                                </select>
                            </label>
                            <label>
                                <p>Notes:</p>
                                <textarea onChange={(e) => props.setText(e.target.value)}></textarea>
                            </label>
                        </form>

                        <Link to='/wizard/wizardCompany'><button>Prev</button></Link>
                        <Link to='/wizard/'><button onClick={props.reportSet}>Submit</button></Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default WizardCompany