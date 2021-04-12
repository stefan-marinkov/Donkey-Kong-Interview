import React from 'react'
import './ListOfReports.scss'
import Modal from 'react-modal';
import { useState } from 'react'

const ListOfReports = props => {

    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
        setIsOpen(!isOpen);
    }
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
                                <th className="viewmodal">
                                    <i className="fa fa-eye" onClick={toggleModal} tia-hidden="true"></i>
                                    <Modal
                                        isOpen={isOpen}
                                        onRequestClose={toggleModal}
                                        contentLabel="My dialog"
                                        className="mymodal"
                                        overlayClassName="myoverlay"
                                        closeTimeoutMS={500}
                                    >
                                        <h2>{r.candidateName}</h2>
                                        <div className='aboutAll'>
                                            <div className='aboutC'>
                                                <p>Company:</p>
                                                <h4>{r.companyName}</h4>
                                                <p>Interview Date:</p>
                                                <h4>{r.interviewDate.slice(4, 15)}</h4>
                                                <p>Phase:</p>
                                                <h4>{r.phase}</h4>
                                                <p>Status:</p>
                                                <h4>{r.status}</h4>
                                            </div>
                                            <div className='aboutN'>
                                                <h4>Notes:</h4>
                                                <p>{r.note}</p>
                                            </div>
                                        </div>
                                        <button className='btn' onClick={toggleModal}>Close</button>
                                    </Modal>
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


