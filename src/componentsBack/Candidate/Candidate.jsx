import React from 'react'
import './Candidate.scss'

const Candidate = props => {
    console.log(props)
    return (
        <div className='Candidate'>
            <p>{props.name}</p>
            <p>{props.birthday}</p>
            <p>{props.email}</p>


        </div>
    )
}

export default Candidate
