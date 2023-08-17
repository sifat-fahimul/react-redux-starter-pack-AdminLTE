import About from "../page/About";
import Home from "../page/Home";
import NotFound from "../page/NotFound";


export const routes = [
    { path: '*', element: <NotFound /> },
    { path: '/', element: <Home /> },
    { path: '/home', element: <Home /> },
    { path: '/about', element: <About /> },
]