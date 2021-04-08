import React from 'react'
import './ListOfReports.scss'

const ListOfReports = props => {
    return (
        <div className='ListOfReports'>
            <div className='reports'>
                <div className='aboutRepo'>
                    <p>{props.companyName}</p>
                    <p>Company</p>
                </div>
                <div className='aboutRepo'>
                    <p>{props.candidateName}</p>
                    <p>Name</p>
                </div>
                <div className='aboutRepo'>
                    <p>{props.interviewDate}</p>
                    <p>Date</p>
                </div>
                <div className='aboutRepo'>
                    <p>{props.status}</p>
                    <p>Status</p>
                </div>
                <div className='aboutRepo btns'>
                    <button>Modal</button>
                    <button onClick={() => props.deleteReport(props.id)}>Delete</button>
                </div>
            </div >
        </div >
    )
}

export default ListOfReports
