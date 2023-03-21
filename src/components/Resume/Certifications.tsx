import { Box, Typography } from '@mui/material';
import { CertificationsProps } from './ResumeCont';




const Certifications = ({CertificationsData}:CertificationsProps) => {
    return(
        <div>
            {CertificationsData.map((cert,index) => (
                <Box key={index}>
                    <Typography variant='h5' component='h3'>
                        <a href={cert.link} target="_blank" rel="noopener noreferrer">{cert.title}</a>
                    </Typography>
                    <Typography variant='subtitle1' component='p'>
                        {cert.provider}
                    </Typography>
                    <Typography variant='body1' component='p'>
                        {cert.year}
                    </Typography>
                </Box>
            ))}
            
        </div>
    );
}
export default Certifications;