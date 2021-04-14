import React, { useContext } from 'react'
import './ListOfCandidates.scss'
import Candidate from '../Candidate'
import { listCandidatesContext } from '../../App'

const ListOfCandidates = props => {


    const listOfCandidate = useContext(listCandidatesContext)
    console.log(listCandidatesContext)

    return (
        <div className='ListOfCandidates'>
            {props.candidates.map(e => {
                return <Candidate key={e.id} {...e} nameCandidate={props.nameCandidate} candidateId={props.candidateId} candId={props.candId} />
            })
            }
        </div>
    )
}

export default ListOfCandidates
