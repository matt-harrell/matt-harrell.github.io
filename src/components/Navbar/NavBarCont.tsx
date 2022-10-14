import * as React from 'react';
import { useEffect,useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import { NavLink, ScrollRestoration, useLocation } from 'react-router-dom';

import { Link as ScrollLink, scroller } from "react-scroll";
import ProjectMenu from './ProjectsMenu';





const pages = ['Resume'];
// make projects go to home and have submenu
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [contactLink, setContactLink] = useState(
    <ScrollLink to="contactForm" smooth={true} duration={300} offset={-55} className="nav-link">
      Contact
    </ScrollLink>
  )

  const location = useLocation();

  useEffect(() =>{
    const urlRegex = new RegExp('projects');
    const url = String(window.location.href);
    
    if(urlRegex.test(url)){
      setContactLink(
        <NavLink to={{pathname:'/',hash:'#contactForm'}} style={{textDecoration:'none',color:'unset'}}>
          Contact
        </NavLink>
      )
    } else {
      setContactLink(
        <ScrollLink to="contactForm" smooth={true} duration={300} offset={-55} className="nav-link">
          Contact
        </ScrollLink>
      )
    }

  },[location])

  useEffect(() =>{
    const urlRegex = new RegExp('#contactForm');
    const url = String(window.location.href);
    
    if(urlRegex.test(url)){
      scroller.scrollTo('scrollToContact', {
        duration: 500,
        delay: 100,
        smooth: true,
        offset: 50,
      })
    }

  },[location])

  

  return (
    <AppBar position="sticky" sx={{marginBottom:2}}>
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
            <NavLink to="/" style={{textDecoration:'none',color:'unset'}}>
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
              <ProjectMenu/>
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <NavLink to={page.replaceAll(' ', '-').toLowerCase()} style={{textDecoration:'none',color:'unset'}}>
                      {page}
                    </NavLink>  
                  </Typography>
                </MenuItem>
              ))}
              <MenuItem  onClick={handleCloseNavMenu}>
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
            <NavLink to="/" style={{textDecoration:'none',color:'unset'}}>
              Matt Harrll
            </NavLink>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <ProjectMenu/>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <NavLink to={page.replaceAll(' ', '-').toLowerCase()} style={{textDecoration:'none',color:'unset'}}>
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
};
export default NavBar;
