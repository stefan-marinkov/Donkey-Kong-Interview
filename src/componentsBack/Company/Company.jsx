import React from 'react'
import './Company.scss'

const Company = props => {

    let background = {}
    if (props.compId === props.id)
        background = { backgroundColor: '#157eab' }

    return (
        <div className='Company'
            style={background}
            onClick={() => {
                props.nameCompany(props.name)
                props.companyId(props.id)
            }}
        >

            <p>{props.name}</p>

        </div >
    )
}

export default Company
