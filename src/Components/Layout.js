import React from 'react'
import Navbar from './Navbar'
import campusBackground from '../Images/LMUCampus.jpg'

const Layout = ({ children, blur = true }) => {
    return (
        <>
            <Navbar />
            <img style={{ maxHeight: '110vw', width: 'auto',height: 'auto', position:'fixed',top:'50%',left:'50%', zIndex: -10, filter: blur?'blur(6px) saturate(1.2)':'blur(0px)', transform: 'translate(-50%,-50%)'}} src={campusBackground} alt="LMU Campus"/>

            <div style={{paddingTop:"10vh"}}>{children}</div>
        </>
    )
}

export default Layout