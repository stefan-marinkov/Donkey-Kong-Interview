import React from 'react'
import './Candidate.scss'

const Candidate = props => {
    console.log(props)
    return (
        <div className={!props.name ? 'Candidate' : 'Candidate CandidateActive'} onClick={() => props.nameCandidate(props.name)}>
            <p>{props.name}</p>
            <p>{props.email}</p>


        </div>
    )
}

export default Candidate
