import React from 'react'
import './ListOfReports.scss'

const ListOfReports = props => {
    console.log(props.infoReports)
    return (
        <div>
            <table>
                <tr>
                    <th>Company</th>
                    <th>Interview Date</th>
                    <th>Status</th>
                </tr>
                <td>
                    {props.companyName}
                </td>
            </table>
        </div >
    )
}

export default ListOfReports;
