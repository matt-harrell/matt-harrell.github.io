import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';



import { NavLink } from 'react-router-dom';

import Projects from '../../data/projects.json';

interface ProjectMenuProps {
  anchorElProject:null | HTMLElement;
  open:boolean;
  handleProjectMenuClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleProjectMenuClose:() => void;
}


const ProjectMenu = ({anchorElProject,open,handleProjectMenuClick,handleProjectMenuClose}:ProjectMenuProps) => {

  

  return (
    <MenuItem sx={{paddingY:{xs:1,md:0},paddingX:{xs:2,md:0},height:'fit-content',alignSelf:'center'}}>
      <Button
        id="project-button"
        aria-controls={open ? 'project-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleProjectMenuClick}
        sx={{color:'unset',padding:{xs:0},textTransform:{xs:'none',md:'Uppercase'},fontSize:{xs:'1rem',md:'0.875rem'},fontWeight:{xs:'400',md:'500'}}}
      >
        Projects
      </Button>
      <Menu
        id="project-menu"
        anchorEl={anchorElProject}
        open={open}
        onClose={handleProjectMenuClose}
        MenuListProps={{
          'aria-labelledby': 'project-menu',
        }}
      >
        {Projects.map((project,index) => {

            let path = project.title.thumbnail;
            let pathURL = path?.replaceAll(' ', '-').toLowerCase();

            return (
            <NavLink to={`/projects/${pathURL || '/'}`} style={{textDecoration:'none',color:'unset'}} key={index}>
              <MenuItem onClick={handleProjectMenuClose} >
                    {project.title.page}
              </MenuItem>
            </NavLink>
            );
            
        })}
        
      </Menu>
    </MenuItem>
  );
}

export default ProjectMenu;