import React from 'react';
import './HeaderFront.scss'
import { Link } from 'react-router-dom';
import Login from '../Login/Login'

const Header = props => {
    return (
        <div>
            <header>
                <Link to="/">
                    <div className="logo">
                        INTERVIEW REPORTS
                </div>
                </Link>

                <div >
                    <Link to="/Login"><button>Login</button></Link>
                </div>
            </header>

        </div>
    )
}

export default Header;
