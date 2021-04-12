import React from 'react'
import './ListOfReports.scss'

const ListOfReports = props => {
    console.log(props.oneReport)
    return (
        <div>
            <div className="ReportHeadline">
                <div className="reports"> REPORTS</div>

                <table>
                    <tr className="rows">
                        <th>Company</th>
                        <th>Interview Date</th>
                        <th>Status</th>
                        <th>View</th>
                    </tr>
                    {props.oneReport.map(r => (
                        <>
                            <tr className="row2">
                                <th>{r.companyName}</th>
                                <th>{r.interviewDate.slice(4, 15)}</th>
                                <th>{r.status}
                                </th>
                                <th>
                                    <i className="fa fa-eye" aria-hidden="true"></i>
                                </th>
                            </tr>
                        </>
                    ))}
                </table>
            </div>
        </div >
    )
}

export default ListOfReports;


