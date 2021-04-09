import React from 'react'
import './FrontEndPage.scss'
import Header from '../../componentsFront/HeaderFront/index';
import ListCandidates from '../../componentsFront/ListCandidates/ListCandidates.jsx';

const FrontEndPage = (props) => {
    console.log(props)
    return (
        <div className='FrontEndPage'>
            <Header />
            <div className="Search">
                <h1>Candidates</h1>
                <input type="text" placeholder="Search for users..."></input>
            </div>
            <hr></hr>
            <main>
                {props.can.map(c => {
                    return <ListCandidates {...c} />
                })}
            </main>

        </div>
    )
}

export default FrontEndPage
