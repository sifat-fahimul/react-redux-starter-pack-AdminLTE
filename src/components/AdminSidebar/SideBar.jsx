import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const SideBar = () => {

    const location = useLocation();
    const currentPath = location.pathname;

    const menuItem = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ]

    console.log(currentPath)
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* <!-- Brand Logo --> */}
            <Link to={'/'} className="brand-link">
                {/* <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3"
                    style="opacity: .8" /> */}
                <span className="brand-text font-weight-light">AdminLTE 3</span>
            </Link>

            {/* <!-- Sidebar --> */}
            <div className="sidebar">
                {/* <!-- Sidebar user panel (optional) --> */}
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        {/* <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" /> */}
                    </div>
                    <div className="info">
                        <a href="#" className="d-block">Alexander Pierce</a>
                    </div>
                </div>

                {/* <!-- Sidebar Menu --> */}
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
                        data-accordion="false">
                        {/* <!-- Add icons to the links using the .nav-icon class
       with font-awesome or any other icon font library --> */}
                        <li className="nav-header">Accounting Software</li>
                        <li className="nav-item has-treeview menu-open">
                            <a className={`nav-link ${menuItem.some(menu => menu.path === currentPath) && 'active'}`}>
                                <i className="nav-icon fas fa-tachometer-alt"></i>
                                <p>
                                    Menu
                                    <i className="right fas fa-angle-left"></i>
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                {menuItem.map((menu, index) => {
                                    return (
                                        <li className="nav-item" key={index}>
                                            <Link to={menu?.path} className={`nav-link ${currentPath === menu.path && 'active'}`}>
                                                <i className="far fa-circle nav-icon"></i>
                                                <p> {menu.name}</p>
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to={'/master-setting'} className={`nav-link ${currentPath === '/master-setting' && 'active'}`}>
                                <i className="nav-icon fas fa-cogs"></i>
                                <p>
                                    Master Setting
                                    <span className="right badge badge-danger">New</span>
                                </p>
                            </Link>
                        </li>


                        {/* <li className="nav-header">MISCELLANEOUS</li>
                        <li className="nav-item">
                            <a href="https://adminlte.io/docs/3.0" className="nav-link">
                                <i className="nav-icon fas fa-file"></i>
                                <p>Documentation</p>
                            </a>
                        </li> */}

                    </ul>
                </nav>
                {/* <!-- /.sidebar-menu --> */}
            </div>
            {/* <!-- /.sidebar --> */}
        </aside>
    )
}

export default SideBar