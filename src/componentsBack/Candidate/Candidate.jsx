import React, { useState } from 'react'
import './Candidate.scss'
import ProfilePicture from '../../img/userprofile.png';

const Candidate = props => {
    console.log(props)


    return (


        <div
            className={'Candidate'}

            onClick={() => {
                props.nameCandidate(props.name)

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
