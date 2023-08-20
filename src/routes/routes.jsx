import NavSideWrapper from "../components/AdminSidebar/NavSideWrapper";
import About from "../page/About";
import Contact from "../page/Contact";
import Home from "../page/Home";
import MasterSetting from "../page/MasterSetting";
import NotFound from "../page/NotFound";


export const routes = [
    { path: '*', element: <NotFound /> },
    { path: '/', element: <Home /> },
    { path: '/home', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/contact', element: <Contact /> },
    { path: '/master-setting', element: <MasterSetting /> },
]