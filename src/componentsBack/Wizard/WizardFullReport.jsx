import React, { useContext, useState } from 'react'
import './Wizard.scss'
import DatePicker from 'react-date-picker';

import { Link } from 'react-router-dom'
import { listReportsContext } from '../../App'

const WizardCompany = (props) => {
    const linkReports = useContext(listReportsContext)
    console.log(linkReports)
    const [value, onChange] = useState(new Date());

    const [phase, setPhase] = useState('')

    // const reportSet = () => {
    //     fetch('http://localhost:3333/api/reports',
    //         method: 'POST',

    //     )
    //         .then(res => res.json())
    // }

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
                            <div className="date-phase-status">
                                <label>
                                    <p>Interview Date:</p>
                                    <div className="calendar">
                                        <DatePicker
                                            onChange={onChange}
                                            value={value}
                                        />
                                    </div>
                                </label>
                                <label>
                                    <p>Phase:</p>
                                    <select >
                                        {/* <option>{setPhase('cv')}</option> */}
                                        <option value={1}>hr</option>
                                        <option>tech</option>
                                        <option>final</option>


                                    </select>
                                </label>
                                <label>
                                    <p>Status:</p>
                                    <select>
                                        <option>passed</option>
                                        <option>declined</option>
                                    </select>
                                </label>
                            </div>
                            <div className='divnote'>
                                <label>
                                    <p>Notes:</p>
                                    <textarea rows="20" cols="125"></textarea>
                                </label>
                            </div>
                        </form>
                        <div className="buttondivdetails">
                            <Link to='/wizard/wizardCompany'><button className="nextbuttondetails">Back</button></Link>
                            <Link to='/wizard/'><button className="nextbuttondetails">Submit</button></Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default WizardCompany