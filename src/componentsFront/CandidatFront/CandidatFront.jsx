import React from 'react'
import './CandidatFront.scss';
import ProfilePicture from '../../img/userprofile.png';
import Header from '../HeaderFront';
import ListOfReports from '../../componentsFront/ListOfReports';

const CandidatFront = (props) => {
    const oneReport = props.reports.filter(e => e.candidateId === Number(props.match.params.id))
    return (
        <>
            {
                !props.match.params.id ? null :

                    <div className="CandidatFront">
                        <Header />
                        <div>
                            {props.candidates.filter(e => e.id === Number(props.match.params.id)).map(c => (
                                <>
                                    <div className="Maindiv">
                                        <div className="Leftdiv">
                                            <img src={ProfilePicture} alt="profilepicture"></img>
                                        </div>
                                        <div className="Rightdiv">
                                            <div className="Namebirth">
                                                <div className="onediv">
                                                    <h5>Name:</h5>
                                                    <p>{c.name}</p>
                                                    <h5>Email:</h5>
                                                    <p>{c.email}</p>
                                                </div>
                                            </div>
                                            <div className="Maileducation">
                                                <div className="twodiv">
                                                    <h5>Date of Birth:</h5>
                                                    <p>{c.birthday.slice(4, 15)}</p>
                                                    <h5>Education:</h5>
                                                    <p>{c.education}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))}
                            <ListOfReports
                                oneReport={oneReport}
                            />
                        </div>
                    </div>
            }
        </>
    )

}

export default CandidatFront;