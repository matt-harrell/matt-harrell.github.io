import {Grid,Box,Typography} from '@mui/material';
import { ProjectIntroContProps } from './ProjectIntroCont';


const ProjectIntroComp = (props:ProjectIntroContProps) => {
    return(
        <>
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
        </>
    );
}

export default ProjectIntroComp;