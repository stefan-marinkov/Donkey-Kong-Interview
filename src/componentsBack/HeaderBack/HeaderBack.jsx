import React from 'react'
import './HeaderBack.scss'
import { Link } from 'react-router-dom'

const HeaderBack = props => {


    return (
        <div className='HeaderBack'>
            <span className="adminreport"><b>Reports Administration</b></span><button onClick={props.logOut}>LogOut</button>
            <div className="buttons">
                <Link to="/backEnd"> <button>Report</button></Link>
                <Link to='/wizard'><button>Change report</button></Link>
            </div>

        </div>
    )
}

export default HeaderBack
