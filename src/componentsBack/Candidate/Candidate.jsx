import React, { useState } from 'react'
import './Candidate.scss'
import ProfilePicture from '../../img/userprofile.png';
const Candidate = props => {
    const [color, setColor] = useState('white');
    const [textColor, setTextColor] = useState('black');
    console.log(props)
    return (
        <div style={{ background: color, color: textColor }} className={'Candidate'} onClick={() => setColor(color)}>
            <div className="picture">
                <img src={ProfilePicture} alt="profilepicture"></img>
            </div>
            <p>{props.name}</p>
            <p>{props.email}</p>
        </div >
    )
}

export default Candidate
