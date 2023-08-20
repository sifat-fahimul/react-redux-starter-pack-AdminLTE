import React from 'react'
import Navbar from './Navbar'
import SideBar from './SideBar'

const NavSideWrapper = ({ children }) => {
    const handleClseSidebar = () => {
        const isopen = document.getElementById('body').className
        if (isopen === 'sidebar-mini layout-fixed sidebar-open') {
            document.getElementById('body').className = 'sidebar-mini layout-fixed sidebar-collapse'
        }
    }
    return (
        <>
            <Navbar />
            <SideBar />
            <div className="content-wrapper" onClick={handleClseSidebar}>
                {children}
            </div>
        </>

    )
}

export default NavSideWrapper