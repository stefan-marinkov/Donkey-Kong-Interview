import React from 'react'
import './HeaderBack.scss'

const HeaderBack = props => {
    return (
        <div className='HeaderBack'>
            <span><b>Reports Administration</b></span>
            <div className="buttons">
                <button>Report</button>
                <button>Change report</button>
            </div>

        </div>
    )
}

export default HeaderBack
