import React from 'react'
import './Company.scss'

const Company = props => {
    console.log(props)
    return (
        <div className='Company' onClick={() => props.nameCompany(props.name)}>

            <p>{props.name}</p>

        </div>
    )
}

export default Company
