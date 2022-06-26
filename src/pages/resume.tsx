import { Typography, Box, Container } from "@mui/material";

import ResumeCont from "../components/Resume/ResumeCont"

const ResumePage = () =>{
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
                Resume
            </Typography>
            <ResumeCont/>
        </Container>
    );
    
}

export default ResumePage