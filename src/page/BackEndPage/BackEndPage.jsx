import React, { useContext } from 'react'
import './BackEndPage.scss'
import HeaderBack from '../../componentsBack/HeaderBack'
import ListOfReports from "../../componentsBack/ListOfReports"
import { Redirect } from 'react-router'
import { loginContext } from '../../App'
import { Link } from 'react-router-dom'


function BackEndPage(props) {
    const { token } = useContext(loginContext)
    return (
        <>

            {!token ? <Redirect to='/'></Redirect > :
                <div className='BackEndPage'>
                    <HeaderBack changeReport={props.changeReport} logOut={props.logOut} />
                    <div className="divsearch">
                        <input type='text' placeholder='Search' onChange={(e) => props.searchReport(e.target.value)} />
                        <div className="buttons">
                            <Link to="/backEnd" className="linkReport"> <button className="btnReport">Report</button></Link>
                            <Link to='/wizard' className='linkCreate'><button className='btnCreate'>Create report</button></Link>
                        </div>
                    </div>
                    <hr></hr>
                    {props.report.map(r => {
                        return <ListOfReports {...r} deleteReport={props.deleteReport} />
                    })}

                </div>
            }
        </>
    )
}

export default BackEndPage
