import './candidates.scss';
import { Link } from 'react-router-dom';

const Candidates = (props) => {
    console.log(props)
    return (
        <div className="Candidates">
            <Link to='/candidatinfo'>
            </Link>
            <img src='avatar'></img>
            <p>{props.name}</p>
            <p>{props.email}</p>
        </div>
    )
}

export default Candidates;