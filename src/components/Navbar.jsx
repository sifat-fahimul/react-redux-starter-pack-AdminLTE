import { Avatar, Box, Container, Divider, IconButton, Menu, MenuItem, Stack, Toolbar, Tooltip, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MuiAppBar from "@mui/material/AppBar";
import MuiDrawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import avatar from '../assets/profile/avatar.jpg'
import logo from '../assets/logo/debonair_logo_dark.svg'
import { userLoggedOut } from '../redux/features/auth/authSlice';
import SideBar from './SideBar';
import { ChevronLeft } from '@mui/icons-material';




//For Drawer
const drawerWidth = 290;

/**
 * When Drawer is Open, this mixin will be applied.
 * Adjusts the main Content window when Drawer is Open accordingly
 * @param {theme} theme
 * 
 */
const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        // duration: theme.transitions.duration.enteringScreen,
        duration: '500ms'
    }),
    overflowX: "hidden",
});


/**
 * When Drawer is Closed, this mixin will be applied.
 * Adjusts the main Content window when Drawer is Closed accordingly
 * @param {theme} theme
 * 
 */
const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        // duration: theme.transitions.duration.leavingScreen,
        duration: '500ms'

    }),
    overflow: "hidden",
    width: `calc(${theme.spacing(8)} + 1px)`,
    [theme.breakpoints.down("lg")]: {
        // width: `calc(${theme.spacing(8)} + 1px)`,
        width: 0,
    },
});

//Head Portion of Drawer
const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

//App Bar
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        // duration: theme.transitions.duration.leavingScreen,
        duration: '500ms'

    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            // duration: theme.transitions.duration.enteringScreen,
            duration: '500ms'

        }),
    }),
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));




const Navbar = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user } = useSelector(state => state.auth)

    //Controls Drawer Open State
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    // For AppBar
    const [anchorElUser, setAnchorElUser] = useState(null);
    //Profile Menu Options
    const settings = [{ name: "Logout", link: "/login" }];
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleLogOut = () => {
        localStorage.clear();
        dispatch(userLoggedOut())
        navigate('/login')
    }


    return (
        <>
            <AppBar
                position="fixed"
                open={open}
                sx={{ backgroundColor: "#212123", color: "rgba(255, 255, 255, 0.87)" }}
            >
                <Container maxWidth="xxl">
                    <Toolbar disableGutters>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{
                                display: { xs: "block", lg: "none" },
                                marginLeft: { display: 1 },
                                marginRight: 3,
                            }}
                        >
                            <MenuIcon sx={{ display: open && 'none' }} />
                        </IconButton>
                        <Box>
                            <Typography
                                variant="h6"
                                noWrap
                                onClick={() => {
                                    dispatch(setActivePageName({ pageName: "Dashboard" }));
                                    navigate("/");
                                }}
                                ml={6}
                                sx={{
                                    cursor: "pointer",
                                    color: { xs: "#05BFDB", md: "white" },
                                }}
                            >
                                {/* HR & Payroll Module */}

                                Modude Name
                            </Typography>
                        </Box>


                        <Box ml={"auto"} sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Stack direction="row" alignItems="center" mx={3}>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: "rgba(255, 255, 255, 0.87)",
                                                display: { xs: "none", md: "block" },
                                            }}
                                        >
                                            {/* Current User: &nbsp; */}
                                            Current User: {user}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{ color: "rgba(255, 255, 255, 0.87)" }}
                                        >
                                            {sessionStorage.getItem("userName")?.toUpperCase()}
                                        </Typography>
                                    </Stack>{" "}
                                    <Avatar alt="Albert Sharp" src={avatar} />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: "45px" }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting, index) => (
                                    <MenuItem
                                        key={index}
                                        onClick={() => {
                                            if (setting.name === "Logout") {
                                                handleLogOut()
                                            } else {
                                                navigate(setting?.link);
                                            }
                                        }}
                                    >
                                        <Typography textAlign="center">{setting?.name}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Drawer
                variant="permanent"
                open={open}
                PaperProps={{
                    sx: {
                        backgroundColor: "#212123 ",
                        color: "rgba(255, 255, 255, 0.87)",
                        zIndex: 2000,
                    },
                }}
                onMouseOver={handleDrawerOpen}
                onMouseOut={handleDrawerClose}
            >
                <DrawerHeader>
                    <Box mr={"auto"} my={2}>
                        <img
                            src={logo}
                            alt="logo"
                            width={50}
                            onClick={() => navigate("/")}
                            style={{ cursor: "pointer" }}
                        />
                    </Box>
                    {open && window.innerWidth < 1200 ? (
                        <>
                            {/* <Typography variant="h6" color={"white"}>
                                Menu
                            </Typography> */}
                            <IconButton onClick={handleDrawerClose}>
                                <ChevronLeft sx={{ color: "rgba(255, 255, 255, 0.87)" }} />
                            </IconButton>
                        </>
                    ) : null}
                </DrawerHeader>
                <Divider />

                <SideBar isOpen={open} />
            </Drawer>
        </>
    )
}

export default Navbar