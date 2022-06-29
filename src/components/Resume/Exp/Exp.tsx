import {Box,Typography, List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { ExpDataProps } from '../ResumeCont';







const Exp = ({ExpData}:ExpDataProps) => {



    return(
        <>
            {ExpData.map((job,index) => 
                <Box key={index}>
                    <Typography component='h2' variant='h5'>
                        {job.title}
                    </Typography>
                    <Box sx={{display:'flex',flexDirection:{xs:'column',sm:'row'}}}>
                        <Typography component='h3' variant='h6'>
                            {job.company}
                        </Typography>
                        <Typography component='h3' variant='h6' sx={{display:{xs:'none',sm:'block'},paddingX:{xs:0,sm:1}}}>
                            |  
                        </Typography>
                        <Typography component='h3' variant='h6' 
                            sx={{fontStyle:'italic'}}
                        >
                            {job.time}
                        </Typography>
                    </Box>
                    <List>
                        {job.Resp.map((resp:string,index:number) => 
                        <ListItem key={index} sx={{paddingX:0}}>
                            <ListItemIcon>
                                <ArrowForwardIosIcon color='secondary'/>
                            </ListItemIcon>
                            <ListItemText>
                            {resp}
                            </ListItemText>
                        </ListItem>
                        )}
                    </List>
                </Box>
            )}
        </>
    );
}
export default Exp;