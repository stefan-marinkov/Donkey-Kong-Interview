import './candidates.scss';
import Candidat from '../Candidat/index';
import { Link } from 'react-router-dom';
const Candidates = (props) => {
    console.log(props)
    return (
        <div className="Candidates">
            {
                props.candidates.map(e => {
                    <Link to='/candidatInfo'> <Candidat {...e} /></Link>
                })
            }
        </div>
    )
}

export default Candidates;