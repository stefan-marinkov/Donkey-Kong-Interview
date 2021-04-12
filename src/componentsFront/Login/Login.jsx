import React, { useContext, useState } from 'react'
import './Login.scss';
import { loginContext } from '../../App'
import { Redirect } from 'react-router-dom';
import ProfilePicture from '../../img/userprofile.png';

const Login = () => {
    const { token, logIn } = useContext(loginContext)

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')


    return (
        <>
            <div className="Login">
                <h1 className="LoginHeadline">Interview Reports</h1>
                {token ? <Redirect to="/backEnd"></Redirect> :
                    <form className="loginform">
                        <div>
                            <img src={ProfilePicture} className="loginprofile" alt="logo"></img>
                            <label for="uname"><h3>Username:</h3></label>
                            <input type="text" placeholder="Enter Username" name="uname" value={email} onChange={(e) => setEmail(e.target.value)} required />

                            <label for="psw"><h3>Password:</h3></label>
                            <input type="password" placeholder="Enter Password" name="psw" value={pass} onChange={(e) => setPass(e.target.value)} required />

                            <button type='button' className="loginbutton" onClick={() => logIn(email, pass)}>Login</button>
                        </div>
                    </form>
                }
            </div>
        </>
    )
}


export default Login;