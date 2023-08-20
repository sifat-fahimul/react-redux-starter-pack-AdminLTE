import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Box } from "@mui/material";
import NavSideWrapper from "./AdminSidebar/NavSideWrapper";


export default function PrivateRoute({ children }) {
    const isLoggedIn = useAuth();



    if (isLoggedIn) {
        return (
            // <Box sx={{ display: "flex" }}
            // >
            //     {/* <Navbar /> */}
            //     <Box component="main" sx={{ flexGrow: 1, pt: 5, mt: 3 }}>
            //         {children}
            //     </Box>
            //     {/* <Footer /> */}
            // </Box>

            <>
                <NavSideWrapper children={children} />
            </>
        );
    } else {
        return <Navigate to="/login" />;
    }
}