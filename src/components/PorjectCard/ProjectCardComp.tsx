import {Grid,Paper,Box, Typography} from '@mui/material';
import { useSpring, animated, useSpringRef, useChain } from 'react-spring'
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
    customClass?:string;
    order?:{
        xs?:number;
        sm?:number;
    };
    
}



const ProjectCardComp = (props:ProjectCardCompProps) =>{

    const [showDesc,setShowDesc] = useState(false);
    const [ref, { height: viewHeight }] = useMeasure()

    const showAninRef = useSpringRef();
    const showAnin = useSpring({
        ref:showAninRef,
        opacity:showDesc ? 1 : 0,
        height: showDesc ? viewHeight : 0,
        config:{duration:200},
    })
    
    const hideDescRef = useSpringRef();
    const hideDesc = useSpring({
        display: showDesc ? 'block' : 'none',
        ref:hideDescRef,
    })

    useChain([showAninRef,hideDescRef],[0, 0.2])

    function handleClickAndMouse() {
        if (showDesc === true) {
            setShowDesc(false)
        } else {
            setShowDesc(true)
        }
           
       }

    // function handleMouse() {
        
    //     if (showDesc === true) {
    //         setShowDesc(false)
    //     } else {
    //         setShowDesc(true)
    //     }
    // }

   return(
    <Grid item xs={props.sizeXS} sm={props.sizeSM} md={props.sizeMD} order={props.order}>
        <Paper
         elevation={1} 
         onClick={handleClickAndMouse}
         onMouseEnter={handleClickAndMouse}
         onMouseLeave={handleClickAndMouse}
         sx={{'&:hover':{
             cursor:'pointer'
         }}}
         >
            <Box>
                <img 
                    src={`assets/images/projects/${props?.title?.replaceAll(' ', '-').toLowerCase()}/${props.imageThumbnail}`} 
                    className={`img ProductCardIMG ${props.customClass}`} 
                    alt=""
                    />
                <Typography variant='h5' component='h2'>
                    {props.title}
                </Typography>
                <animated.div style={{opacity:showAnin.opacity,height:showAnin.height,display:hideDesc.display}}>
                    <animated.div ref={ref} style={{padding:'.5em'}}>
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