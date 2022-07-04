import {Grid,Paper,Box, Typography} from '@mui/material';
import { useSpring, animated, useSpringRef, useChain, } from 'react-spring'
import useMeasure from 'react-use-measure'

import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";


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
    style?:any;
    
}



const ProjectCardComp = (props:ProjectCardCompProps) =>{

    let navigate = useNavigate();

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

    const overlayAnin = useSpring({
        opacity:showDesc ? 1 : 0,
        config:{duration:200},
    })

    useChain([showAninRef,hideDescRef],[0, 0.2])

    function handleClickHover() {
        const url = '/projects/' + props.pathURL || '/';

        if (showDesc === false) {
            setShowDesc(true)
        } else{
            navigate(url, { replace: false });
        }
           
       }
    

    function handleMouseLeave() {
        if (showDesc === true) {
            setShowDesc(false)
        }    
    }

   return(
    
    <Grid item xs={props.sizeXS} sm={props.sizeSM} md={props.sizeMD} order={props.order}>
        <animated.div style={{...props.style}}>
            <Paper
            elevation={1}
            onMouseEnter={handleClickHover} 
            onClick={handleClickHover}
            onMouseLeave={handleMouseLeave}
            sx={{
                '&:hover':{
                cursor:'pointer',
            }}}
            >
                <Box>
                    <Box sx={{position:"relative"}}>
                        <img 
                            src={`assets/images/projects/${props?.title?.replaceAll(' ', '-').toLowerCase()}/${props.imageThumbnail}`} 
                            className={`img ProductCardIMG ${props.customClass}`} 
                            alt=""
                        />
                        <animated.div style={{position:"absolute",top:0,backgroundColor:"#00000099",width:"100%",height:"99%",display:"flex",justifyContent:"center",alignItems:"center",opacity:overlayAnin.opacity}}>
                            <Typography variant='h3' component='p' sx={{textAlign:"center",color:"white"}}>
                                Click to View
                            </Typography>
                        </animated.div>
                    </Box>
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
        </animated.div>
    </Grid>
   );
}


export default ProjectCardComp;