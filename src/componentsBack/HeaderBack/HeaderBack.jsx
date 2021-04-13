import React from 'react'
import './HeaderBack.scss'
import { Link } from 'react-router-dom'

const HeaderBack = props => {


    return (
        <div className='HeaderBack'>
            <span className="adminreport"><b>Reports Administration</b></span><button onClick={props.logOut}>LogOut</button>
        </div>
    )
}

export default HeaderBack
