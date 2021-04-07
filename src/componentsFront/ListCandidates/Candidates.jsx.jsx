import './candidates.scss';

const Candidates = (props) => {
    console.log(props)
    return (
        <div className="Candidates">
            <img src='avatar'></img>
            <p>{props.name}</p>
            <p>{props.email}</p>

        </div>
    )
}

export default Candidates;