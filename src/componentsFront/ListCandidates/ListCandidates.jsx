import './ListCandidates.scss';
import { Link } from 'react-router-dom';
import ProfilePicture from '../../img/userprofile.png';

const ListCandidates = (props) => {
    return (
        <>
            <div>
                <Link to={`/candidatinfo/${props.id}`}>
                    <div className="CandidateCard" onClick={() => props.setId(props.id)}>
                        <img src={ProfilePicture} alt="profilepicture"></img>
                        <h3>{props.name}</h3>
                        <p>{props.email}</p>
                    </div>
                </Link>
            </div>

        </>
    )
}

export default ListCandidates;