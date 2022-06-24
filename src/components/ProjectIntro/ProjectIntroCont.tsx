import {Grid,Typography,List,ListItem, ListItemText,ListItemIcon, Box } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';

import { useEffect, useState } from 'react';

import Projects from '../../data/projects.json';

import ProjectIntroComp from './ProjectIntroComp';



interface links {
    link:string;
    text:string;
}


 interface ProjectIntroContProps {
    nameOfProject?:string;
    title?:string;
    skills?:string[] | undefined;
    image?:string;
    imagePath?:string;
    Desc?:string;
    linksElement?: JSX.Element;
    skillsElement?:JSX.Element;
}


const ProjoctIntroCont = (props:ProjectIntroContProps) =>{
    const Project = Projects.find((project) => project.title.page === props.nameOfProject);

    const [title, setTitle] =useState("Matt's Portfolio");

    // const pageTitle = setTitle(Project.title.page) || "Matt's Portfolio";

    useEffect(()=>{
        setTitle(String(Project?.title.page))
        document.title = `${title} | Matt's Portfolio`;
    }, [Project?.title.page, title]);

    

    let websiteLinks;
    if (Project?.projectLinks !== undefined){
        const ProjectLinks = Project?.projectLinks;
       websiteLinks = ProjectLinks.map((Projectlink,index) =>

       <ListItem key={index}><a href={Projectlink.link}>{Projectlink.text}</a></ListItem>

       )
       
       
    }

    let linksElement;
    if (websiteLinks !== undefined){
        linksElement =
        <Box> 
            <Typography variant='h4' component='h2'>Project Links</Typography>
                <List>
                    {websiteLinks}
                </List>
        </Box>
    }


    const skills = Project?.skills || [];

   const skillsOddorEven = (skills.length % 2 === 0) ? true : false;

   let skillsHalf = skillsOddorEven ? Math.floor(skills.length / 2) : Math.floor(skills.length / 2) + 1;
   let skillsFirstHalf = skills?.slice(0, skillsHalf);
   let skillsSecondHalf = skills?.slice(skillsHalf, skills?.length);

   const skillsSingle =
   <Grid container spacing={{xs:1}}>
    <Grid item xs={6}>
        <List>
            {skills.map((skill,index) => {
                return(
                    <ListItem key={index} sx={{padding:0}}>
                        <ListItemIcon>
                            <DoneIcon color='secondary'/>
                        </ListItemIcon>
                        <ListItemText primary={skill} sx={{color:"black"}}/>                                    
                    </ListItem>
                )
            })}
        </List>
    </Grid>
   </Grid>
   ;

    const skillsDouble = 
    <Grid container spacing={{xs:1}}>
        <Grid item xs={6}>
            <List>
                {skillsFirstHalf.map((skill,index) => {
                    return(
                        <ListItem key={index} sx={{padding:0}}>
                            <ListItemIcon>
                                <DoneIcon color='secondary'/>
                            </ListItemIcon>
                            <ListItemText primary={skill} sx={{color:"black"}}/>                                    
                        </ListItem>
                    )
                })}
            </List>
        </Grid>
        <Grid item xs={6}>
            <List>
                {skillsSecondHalf.map((skill,index) => {
                    return(
                        <ListItem key={index} sx={{padding:0}}>
                            <ListItemIcon>
                                <DoneIcon color='secondary'/>
                            </ListItemIcon>
                            <ListItemText primary={skill} sx={{color:"black"}}/>                                    
                        </ListItem>
                    )
                })}
            </List>
        </Grid>
    </Grid>

    let skillsElement;
    if (skills.length <= 4){
        skillsElement = skillsSingle;
    } else {
        skillsElement = skillsDouble;
    }
    
    return(
        <ProjectIntroComp
            title={Project?.title.page}
            skills={Project?.skills}
            image={Project?.images.main || Project?.images.thumbnail}
            imagePath={Project?.title.thumbnail.replaceAll(' ', '-').toLowerCase()}
            Desc={Project?.description}
            linksElement={linksElement}
            skillsElement={skillsElement}
        />
    );

}

export default ProjoctIntroCont;
export type {ProjectIntroContProps, links};