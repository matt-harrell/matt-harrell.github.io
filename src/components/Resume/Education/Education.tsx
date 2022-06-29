import { Box, Typography } from '@mui/material';
import { EducationProps } from '../ResumeCont';

const Education = ({EducationData}:EducationProps) => {
    return(
        <div>
            {EducationData.map((edu,index) => (
                <Box key={index}>
                    <Typography variant='h5' component='h3'>
                        {edu.level}
                    </Typography>
                    <Typography variant='subtitle1' component='p'>
                        {edu.school} | {edu.location}
                    </Typography>
                    <Typography variant='body1' component='p'>
                        {edu.year}
                    </Typography>
                </Box>
            ))}
            
        </div>
    );
}
export default Education;