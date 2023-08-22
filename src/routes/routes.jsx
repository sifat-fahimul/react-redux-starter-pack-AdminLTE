import NavSideWrapper from "../components/AdminSidebar/NavSideWrapper";
import About from "../page/About";
import Contact from "../page/Contact";
import Dashboard from "../page/Dashboard";
import Home from "../page/Home";
import MasterSetting from "../page/MasterSetting";
import NotFound from "../page/NotFound";


export const routes = [
    { path: '*', pageName: '404', element: <NotFound /> },
    { path: '/', pageName: 'Dashboard', element: <Dashboard /> },
    { path: '/home', pageName: 'Home', element: <Home /> },
    { path: '/about', pageName: 'About', element: <About /> },
    { path: '/contact', pageName: 'Contact', element: <Contact /> },
    { path: '/master-setting', pageName: 'Master Setting', element: <MasterSetting /> },
]