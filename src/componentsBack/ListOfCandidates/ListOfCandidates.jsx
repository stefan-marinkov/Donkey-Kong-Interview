import React from 'react'
import './ListOfCandidates.scss'
import Candidate from '../Candidate'

const ListOfCandidates = props => {

    return (
        <div className='ListOfCandidates'>
            {props.list.map(e => {
                return <Candidate {...e} />
            })
            }
        </div>
    )
}

export default ListOfCandidates
