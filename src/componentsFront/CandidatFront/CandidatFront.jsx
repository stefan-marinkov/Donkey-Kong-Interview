import React from 'react'
import './CandidatFront.scss';
import ProfilePicture from '../../img/userprofile.png';
import Header from '../HeaderFront';
import ListOfReports from '../../componentsFront/ListOfReports';

const CandidatFront = (props) => {
    return (
        <div className="CandidatFront">
            <Header />
            <div>
                {props.infoCandidates.map(c => (
                    <>
                        <div className="Maindiv">
                            <div className="Leftdiv">
                                <img src={ProfilePicture}></img>
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
                                        <p>{c.birthday}</p>
                                        <h5>Education:</h5>
                                        <p>{c.education}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ))}
                <ListOfReports />
            </div>
        </div>

    )

}

export default CandidatFront;