import React from 'react'
import './FrontEndPage.scss'
import Header from '../../componentsFront/HeaderFront/index';
import { Switch, Link, Route } from 'react-router-dom';
import Candidates from '../../componentsFront/ListCandidates/Candidates.jsx';

const FrontEndPage = (props) => {
    console.log(props)
    return (
        <div className='FrontEndPage'>
            <Header />
            {props.can.map(c => {
                return <Candidates {...c} />
            })}

        </div>
    )
}

export default FrontEndPage
