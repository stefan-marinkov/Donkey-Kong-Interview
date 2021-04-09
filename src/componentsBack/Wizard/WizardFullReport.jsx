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

                <div className='listFullReport'>
                    <div>
                        <form>
                            <label>
                                <p>Interview Date:</p>
                                <div>
                                    <DatePicker
                                        onChange={onChange}
                                        value={value}
                                    />
                                </div>
                            </label>
                            <label>
                                <p>Phase:</p>
                                <select>
                                    {/* <option>{setPhase('cv')}</option> */}
                                    <option>hr</option>
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
                            <label>
                                <p>Notes:</p>
                                <textarea></textarea>
                            </label>
                        </form>

                        <Link to='/wizard/wizardCompany'><button>Prev</button></Link>
                        <Link to='/wizard/'><button>Submit</button></Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default WizardCompany