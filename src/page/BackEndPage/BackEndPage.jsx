import React from 'react'
import './BackEndPage.scss'
import HeaderBack from '../../componentsBack/HeaderBack'
import ListOfCandidates from "../../componentsBack/ListOfCandidates"

function BackEndPage(props) {
    return (
        <div className='BackEndPage'>
            <HeaderBack />
            <div className='search'><input type='text' placeholder='Search' /></div>


        </div>
    )
}

export default BackEndPage
