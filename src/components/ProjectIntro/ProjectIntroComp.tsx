import {Grid,Typography, Container } from '@mui/material';

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
                        <div style={{position: "relative", paddingBottom: "56.25%", height:"0"}}>
                            <iframe 
                                src={props.video}  
                                allowFullScreen
                                title='Demo video' 
                                style={{position:"absolute",top:0,left:0, width:"100%",height: "100%",}}
                                >
                            </iframe>
                        </div>
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
                        {props.Desc}
                    </Typography>
                </Grid>

            </Grid>
        </Container>
    );
}

export default ProjectIntroComp;