import React, { useContext } from 'react'
import './BackEndPage.scss'
import HeaderBack from '../../componentsBack/HeaderBack'
import ListOfReports from "../../componentsBack/ListOfReports"
import { Redirect } from 'react-router'
import { loginContext } from '../../App'


function BackEndPage(props) {
    const { token } = useContext(loginContext)
    return (
        <>

            {!token ? <Redirect to='/'></Redirect > :
                <div className='BackEndPage'>
                    <HeaderBack changeReport={props.changeReport} logOut={props.logOut} />
                    <div className="divsearch">
                        <h1>Candidates</h1>
                        <input type='text' placeholder='Search' onChange={(e) => props.searchReport(e.target.value)} />
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
