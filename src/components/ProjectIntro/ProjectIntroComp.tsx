import {Grid,Typography, Container } from '@mui/material';

import { ProjectIntroContProps } from './ProjectIntroCont';


const ProjectIntroComp = (props:ProjectIntroContProps) => {
    
    // const skills = props.skills || [];
    // let skillsHalf = Math.floor(skills.length / 2) + 1;
    // let skillsFirstHalf = skills?.slice(0, skillsHalf);
    // let skillsSecondHalf = skills?.slice(skillsHalf, skills?.length);

    return(
        <Container>
            <Typography 
                variant='h2' 
                component='h1' 
                sx={{
                        fontWeight:'medium',
                        textAlign:'center',
                    }}
                >
                {props.title}
            </Typography>
            <hr className='greenBorder'></hr>
            <Grid container spacing={{ xs: 2, md: 3 }}>
                
                <Grid item xs={12} md={6}>
                    <img
                        className='img' 
                        src={`assets/images/projects/${props.imagePath}/${props.image}`} 
                        alt=""
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    {props.linksElement}
                    <Typography variant='h4' component='h2'>
                        Skills
                    </Typography>
                    {/* <Grid container spacing={{xs:1}}>
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
                    </Grid> */}
                    {props.skillsElement}
                    <Typography variant='h4' component='h2'>
                        Description
                    </Typography>
                    <Typography variant='body1' component='p' className='desc'>
                        {props.Desc}
                    </Typography>
                </Grid>

            </Grid>
        </Container>
    );
}

export default ProjectIntroComp;