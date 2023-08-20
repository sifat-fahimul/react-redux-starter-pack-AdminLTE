import React from 'react'
import Navbar from './Navbar'
import SideBar from './SideBar'

const NavSideWrapper = ({ children }) => {
    return (
        <>
            <Navbar />
            <SideBar />
            <div className="content-wrapper">
                {children}
            </div>
        </>

    )
}

export default NavSideWrapper