import React from 'react'
// import { Stack, Typography } from "@mui/material";
import nodePackageInfo from "../../package.json";
import { Stack, Typography } from '@mui/material';
const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer
            style={{
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                background: "#212123",
                // textAlign: "center",
                padding: "0.75rem",
                color: "rgba(255, 255, 255, 0.87)",
            }}
        >
            <Stack
                direction={{ xs: "column", md: "row" }}
                spacing="auto"
                justifyContent={"center"}
            >
                <Typography ml={10} fontSize={{ xs: "small", md: "medium" }}>
                    ©{year} &nbsp; Debonair Group | All Rights Reserved
                </Typography>

                <Stack
                    direction={{ xs: "column", md: "row" }}
                    spacing={1}
                    justifyContent={"center"}
                    display={{ xs: "none", md: "flex" }}
                >
                    <Typography variant="body1" noWrap mx={5}>
                        {/* <span style={{ color: "#05BFDB" }}>Current Page: </span>&nbsp; */}
                        {/* {pageName} */}
                        {/* <span style={{ color: "#FF6D60" }}>{pageName}</span> */}
                    </Typography>
                    {/* | */}
                    <Typography sx={{ marginRight: { md: 10 } }}>
                        Version: {nodePackageInfo.version}
                    </Typography>
                </Stack>
            </Stack>
        </footer>
    )
}

export default Footer