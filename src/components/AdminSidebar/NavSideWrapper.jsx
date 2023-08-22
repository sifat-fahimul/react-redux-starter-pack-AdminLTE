import React from 'react'
import Navbar from './Navbar'
import SideBar from './SideBar'
import Footer from './Footer'

const NavSideWrapper = ({ children }) => {
    const handleCloseSidebar = () => {
        const isOpen = document.getElementById('body').className
        if (isOpen === 'sidebar-mini layout-fixed sidebar-open' || isOpen === 'sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed sidebar-open') {
            document.getElementById('body').className = 'sidebar-mini layout-fixed sidebar-collapse'
        }
    }
    return (
        <>
            <Navbar />
            <SideBar />
            <div className="content-wrapper" onClick={handleCloseSidebar}>
                {children}
            </div>
            <Footer />
        </>

    )
}

export default NavSideWrapper