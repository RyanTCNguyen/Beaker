import React from 'react'
import Navbar from './Navbar'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />

            <div style={{paddingTop:"10vh"}}>{children}</div>
        </>
    )
}

export default Layout
