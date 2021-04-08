import React from 'react'
import './Company.scss'

const Company = props => {
    console.log(props)
    return (
        <div className='Company'>

            <p>{props.companyName}</p>

        </div>
    )
}

export default Company
