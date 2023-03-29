import {Grid,Typography, Container } from '@mui/material';
import parse from 'html-react-parser';

import { ProjectIntroContProps } from './ProjectIntroCont';


const ProjectIntroComp = (props:ProjectIntroContProps) => {
    
    // const skills = props.skills || [];
    // let skillsHalf = Math.floor(skills.length / 2) + 1;
    // let skillsFirstHalf = skills?.slice(0, skillsHalf);
    // let skillsSecondHalf = skills?.slice(skillsHalf, skills?.length);

    return(
        <Container sx={{paddingBottom:15}}>
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
                
                <Grid item xs={12} md={6} sx={{display:"flex"}}>
                    {props.video === undefined ?
                        <img
                            className='img projectImg' 
                            src={`/assets/images/projects/${props.imagePath}/${props.image}`} 
                            alt=""
                        />
                        :
                        <iframe width="560" height="315" 
                            src={props.video} 
                            title="YouTube video player"  
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowFullScreen
                            frameBorder={0}
                        >
                        </iframe>
                    }
                    
                </Grid>

                <Grid item xs={12} md={6}>
                    {props.linksElement}
                    <Typography variant='h4' component='h2'>
                        Skills
                    </Typography>
                    {props.skillsElement}
                    <Typography variant='h4' component='h2'>
                        Description
                    </Typography>
                    <Typography variant='body1' component='p' className='desc'>
                        {parse(props.Desc || '')}
                    </Typography>
                </Grid>

            </Grid>
        </Container>
    );
}

export default ProjectIntroComp;