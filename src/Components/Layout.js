import React from 'react'
import Navbar from './Navbar'
import campusBackground from '../Images/LMUCampus.jpg'

const Layout = ({ children, blur = true }) => {
    return (
        <>
            <Navbar />
            <img style={{width: '99vw', height: '99vh', position:'fixed',top:'1rem', zIndex: -10, filter: blur?'blur(6px)':'blur(0px)'}} src={campusBackground} alt="LMU Campus"/>

            <div style={{paddingTop:"10vh"}}>{children}</div>
        </>
    )
}

export default Layout