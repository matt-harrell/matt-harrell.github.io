
import { useEffect,useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink, scroller } from "react-scroll";
import { useMediaQuery, useTheme } from '@mui/material';
import NavBarComp from './NavBarComp';



const pages = ['Resume'];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElProject, setanchorElProject] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorElProject);
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const [contactLink, setContactLink] = useState(
    <ScrollLink to="contactForm" smooth={true} duration={300} offset={-55} className="nav-link">
      Contact
    </ScrollLink>
  )

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // project menu 
  const handleProjectMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setanchorElProject(event.currentTarget);
  };
  const handleProjectMenuClose = () => {
    setanchorElProject(null);
    if(matchesSM){
      setAnchorElNav(null);
    }
  };
  // end of project menu  

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
    <NavBarComp
      anchorElNav={anchorElNav}
      anchorElProject={anchorElProject}
      open={open}
      contactLink={contactLink}
      pages={pages}
      handleOpenNavMenu={handleOpenNavMenu}
      handleCloseNavMenu={handleCloseNavMenu}
      handleProjectMenuClick={handleProjectMenuClick}
      handleProjectMenuClose={handleProjectMenuClose}
    />
  );
};
export default NavBar;
