import React from 'react'
import { Link } from 'react-router-dom'
import Company from '../../Company'

const WizardCompany = (props) => {

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
                </ol>
            </div>
            <div className='listWithSearch'>
                <div className='search'><input type='text' placeholder='Search' /></div>
                {
                    props.listCompany.map(comp => {
                        return <Company {...comp} />
                    })
                }
                <Link to='/wizard'><button>Prev</button></Link>
            </div>
        </>
    )
}

export default WizardCompany