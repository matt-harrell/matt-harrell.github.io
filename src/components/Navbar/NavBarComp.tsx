import { AppBar, Container, Toolbar, Typography, Box, IconButton, Menu, MenuItem, Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from "react-router-dom";
import { ReactNode } from "react";

import ProjectMenu from './ProjectsMenu';

interface NavBarCompProps {
    anchorElNav: null | HTMLElement;
    anchorElProject: null | HTMLElement;
    open: boolean;
    contactLink: ReactNode;
    pages: string[];
    handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
    handleCloseNavMenu: () => void;
    handleProjectMenuClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    handleProjectMenuClose: () => void;
}

const NavBarComp = ({ anchorElNav, anchorElProject, open, contactLink, pages, handleOpenNavMenu, handleCloseNavMenu, handleProjectMenuClick, handleProjectMenuClose }: NavBarCompProps) => {
    return (
        <AppBar position="sticky" sx={{ marginBottom: 2 }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="p"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <NavLink to="/" style={{ textDecoration: 'none', color: 'unset' }}>
                            Matt Harrll
                        </NavLink>
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <ProjectMenu
                                anchorElProject={anchorElProject}
                                open={open}
                                handleProjectMenuClick={handleProjectMenuClick}
                                handleProjectMenuClose={handleProjectMenuClose}
                            />
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        <NavLink to={page.replaceAll(' ', '-').toLowerCase()} style={{ textDecoration: 'none', color: 'unset' }}>
                                            {page}
                                        </NavLink>
                                    </Typography>
                                </MenuItem>
                            ))}
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">
                                    {contactLink}
                                </Typography>
                            </MenuItem>
                        </Menu>
                    </Box>


                    {/* desktop menu */}
                    <Typography
                        variant="h5"
                        noWrap
                        component="p"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <NavLink to="/" style={{ textDecoration: 'none', color: 'unset' }}>
                            Matt Harrll
                        </NavLink>
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <ProjectMenu
                            anchorElProject={anchorElProject}
                            open={open}
                            handleProjectMenuClick={handleProjectMenuClick}
                            handleProjectMenuClose={handleProjectMenuClose}
                        />
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <NavLink to={page.replaceAll(' ', '-').toLowerCase()} style={{ textDecoration: 'none', color: 'unset' }}>
                                    {page}
                                </NavLink>
                            </Button>
                        ))}
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {contactLink}
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default NavBarComp; 