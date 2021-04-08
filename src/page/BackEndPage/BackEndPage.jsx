import React from 'react'
import './BackEndPage.scss'
import HeaderBack from '../../componentsBack/HeaderBack'
import ListOfReports from "../../componentsBack/ListOfReports"

function BackEndPage(props) {
    return (
        <div className='BackEndPage'>
            <HeaderBack changeReport={props.changeReport} />
            <div className='search'><input type='text' placeholder='Search' onChange={(e) => props.searchReport(e.target.value)} /></div>
            {props.report.map(r => {
                return <ListOfReports {...r} deleteReport={props.deleteReport} />
            })}
        </div>
    )
}

export default BackEndPage
