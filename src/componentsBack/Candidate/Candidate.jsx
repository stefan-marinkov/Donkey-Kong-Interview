import React, { useContext, useState } from 'react'
import './Candidate.scss'
import ProfilePicture from '../../img/userprofile.png';

const Candidate = props => {


    let background = {}
    if (props.candId === props.id)
        background = { backgroundColor: '#157eab' }


    return (
        <div className={'Candidate'}
            style={background}
            onClick={() => {
                props.nameCandidate(props.name)
                props.candidateId(props.id)

            }
            }

        >
            <div className="picture">
                <img src={ProfilePicture} alt="profilepicture"></img>
            </div>
            <p>{props.name}</p>
            <p>{props.email}</p>
        </div >
    )
}

export default Candidate
