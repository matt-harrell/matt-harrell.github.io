import { Typography, Button, Container,Box } from "@mui/material";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';


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
            <Box sx={{textAlign:'center'}}>
                <Button 
                    variant="contained"
                    color="secondary"
                    endIcon={<FileDownloadOutlinedIcon />}
                    disableElevation
                    onClick={() => {window.open('/assets/docs/Matt_Harrell_Resume.pdf')}}
                >
                    Download PDF Version
                </Button>
            </Box>
            <ResumeCont/>
        </Container>
    );
    
}

export default ResumePage