import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/material';


import { NavLink } from 'react-router-dom';

import Projects from '../../data/projects.json';


export function ProjectMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  

  return (
    <MenuItem sx={{paddingY:{xs:1,md:1},paddingX:{xs:2,md:1}}}>
      <Button
        id="project-button"
        aria-controls={open ? 'project-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{color:'unset',padding:0,textTransform:{xs:'none',md:'Uppercase'},fontSize:{xs:'1rem',md:'0.875rem'},fontWeight:{xs:'400',md:'500'}}}
      >
        Projects
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'project-menu',
        }}
      >
        {Projects.map((project,index) => {

            let path = project.title.thumbnail;
            let pathURL = path?.replaceAll(' ', '-').toLowerCase();

            return (
            <MenuItem onClick={handleClose} key={index}>
                <NavLink to={`/projects/${pathURL || '/'}`} style={{textDecoration:'none',color:'unset'}}>
                    {project.title.page}
                </NavLink>
            </MenuItem>
            );
            
        })}
        
      </Menu>
    </MenuItem>
  );
}

export default ProjectMenu;