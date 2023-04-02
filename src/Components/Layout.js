import React from 'react'
import Navbar from './Navbar'
import lMUCampus from '../Images/LMUCampus.jpg'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <img style={{width: '99vw', height: '99vh', position:'fixed', zIndex: -10}} src={lMUCampus}/>

            <div style={{paddingTop:"10vh"}}>{children}</div>
        </>
    )
}

export default Layout
