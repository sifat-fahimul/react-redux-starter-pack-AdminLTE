import { Avatar, Box, Button, IconButton, Menu, MenuItem, Stack, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import avatar from '../../assets/profile/avatar.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { userLoggedOut } from '../../redux/features/auth/authSlice'
const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user } = useSelector(state => state.auth)
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
        <nav className="main-header navbar navbar-expand navbar-white navbar-light d-flex justify-content-between">
            {/* <!-- Left navbar links --> */}
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" data-widget="pushmenu" href="#"><i className="fas fa-bars"></i></a>
                </li>

            </ul>

            <span className='animate-text'>company Name</span>

            {/* <!-- SEARCH FORM --> */}
            {/* <form className="form-inline ml-3">
                <div className="input-group input-group-sm">
                    <input className="form-control form-control-navbar" type="search" placeholder="Search"
                        aria-label="Search" />
                    <div className="input-group-append">
                        <button className="btn btn-navbar" type="submit">
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                </div>
            </form> */}



            {/* <!-- Right navbar links --> */}
            {/* <div className='pe-4'>
                <p>hej</p>
            </div> */}


            <Box ml={"auto"} sx={{ flexGrow: 0, pr: { xs: 1, sm: 3 } }}>
                <Tooltip title="Open settings">
                    <Button variant="text" onClick={handleOpenUserMenu} sx={{ p: 0, border: 'none', outline: 'none', " &:focus": { outline: 'none' } }} disableElevation>
                        <Stack direction="row" alignItems="center" mx={3}>
                            <Typography
                                variant="body3"
                                sx={{
                                    color: "black",
                                    display: { xs: "none", md: "block" },
                                }}
                            >
                                {/* Current User: &nbsp; */}
                                Current User:
                            </Typography>
                            <Typography
                                variant="body3"
                                // sx={{ color: "rgba(255, 255, 255, 0.87)" }}
                                sx={{ color: "black", fontSize: { xs: '12px', sm: '0.875rem' } }}
                            >
                                {/* {sessionStorage.getItem("userName")?.toUpperCase()} */}
                                {user}
                            </Typography>
                        </Stack>{" "}
                        <Avatar alt="Albert Sharp" src={avatar} />
                    </Button>
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
        </nav >
    )
}

export default Navbar