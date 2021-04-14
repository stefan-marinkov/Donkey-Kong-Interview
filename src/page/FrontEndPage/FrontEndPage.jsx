import React from 'react'
import './FrontEndPage.scss'
import Header from '../../componentsFront/HeaderFront/index';
import ListCandidates from '../../componentsFront/ListCandidates/ListCandidates.jsx';

const FrontEndPage = (props) => {

    return (
        <div className='FrontEndPage'>
            <Header />
            <div className="Search">
                <input type="text" placeholder="Search for users..." onChange={(e) => props.searchCandidate(e.target.value)}></input>
            </div>
            <hr></hr>
            <main>
                {props.filterCandidateName.map(c => {
                    console.log(c)
                    return <ListCandidates {...c} setId={props.setId} />
                })}
            </main>

        </div>
    )
}

export default FrontEndPage
