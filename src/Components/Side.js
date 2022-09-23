import React from 'react'
// import sidebaritems from '../sidebaritems'
import Sidebar from './Sidebar'

/* 
TODO: Need to clean up Side.js, Sidebar.js, and StudentSide.js
      A lot of sidebar components, need to use one or make distinct
      ones for faculty/student.
*/

const Side = ({ children, sidebaritems }) => {
    return (
        <>
            <Sidebar sidebaritems={sidebaritems} />

            <div>{children}</div>
        </>
    )
}

export default Side
