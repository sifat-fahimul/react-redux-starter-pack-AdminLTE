import React from 'react'
import nodePackageInfo from "../../../package.json";
import { useLocation } from 'react-router-dom';
import { routes } from '../../routes/routes';


const Footer = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const date = new Date();
    const year = date.getFullYear();

    // current page functionality
    const currentPage = routes?.find(e => e?.path === currentPath)?.pageName

    return (
        <footer className="main-footer">
            <strong>Copyright &copy; {year} <a target='_blank' href="https://debonairgroupbd.com/">Debonair Group  </a>| </strong>
            All rights reserved.
            <div className="float-right d-none d-sm-inline-block">

                Current Page:<strong> <span className='text-primary'>{currentPage}  </span>| </strong>
                <b>Version :</b> {nodePackageInfo?.version}
            </div>
        </footer>
    )
}

export default Footer