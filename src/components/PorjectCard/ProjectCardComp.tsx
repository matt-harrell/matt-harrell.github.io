import {Grid,Paper,Box, Typography} from '@mui/material';
import { useSpring, animated } from 'react-spring'
import useMeasure from 'react-use-measure'

import { useState } from 'react';
import { Link } from "react-router-dom";





interface ProjectCardCompProps{
    title?:string;
    description?:string;
    pathURL?:string;
    imageThumbnail:string | undefined;
    sizeXS:number;
    sizeSM:number;
    sizeMD:number;
    
}



const ProjectCardComp = (props:ProjectCardCompProps) =>{

    const [showDesc,setShowDesc] = useState(true);
    const [ref, { height: viewHeight }] = useMeasure()

    const showAnin = useSpring({
        opacity:showDesc ? 0 : 1,
        height: showDesc ? 0 : viewHeight,
        config:{duration:200},
        

    }) 

    function handleClick() {
        if (showDesc === true) {
            setShowDesc(false)
        } else {
            setShowDesc(true)
        }
           
       }

    function handleMouse() {
        if (showDesc === true) {
            setShowDesc(false)
        } else {
            setShowDesc(true)
        }
    }

   return(
    <Grid item xs={props.sizeXS} sm={props.sizeSM} md={props.sizeMD}>
        <Paper
         elevation={1} 
         onClick={handleClick}
         onMouseEnter={handleMouse}
         onMouseLeave={handleMouse}
         sx={{'&:hover':{
             cursor:'pointer'
         }}}
         >
            <Box>
                <img src={`/images/projects/${props?.title?.toLowerCase()}/${props.imageThumbnail}`} className="img" alt="" />
                <Typography variant='h2' component='h2'>
                    {props.title}
                </Typography>
                <animated.div style={showAnin}>
                    <animated.div ref={ref}>
                        <Typography variant='body1' component='p'>
                            {props.description}
                        </Typography>
                        <Typography variant='body1' component='p'>
                            <Link to={props.pathURL || '/'}>Go to {props.title}</Link>
                        </Typography>
                    </animated.div>
                </animated.div>
            </Box>
        </Paper>
    </Grid>
   );
}

export default ProjectCardComp;