import {Grid,Box,Typography, List, ListItem, ListItemIcon, ListItemText} from '@mui/material';

import Contact from './contact/contact';
import Education from './Education/Education';

import Exp from './Exp/Exp';
// import { ResumeDataProps } from './ResumeCont';
import { ResumeCompProps } from './ResumeCont';
import Skills from './Skills/skills';


// const ResumeComp = ({ExpData,ContactInfo}:ContactInfo) => {
const ResumeComp = (props:ResumeCompProps) => {



    return(
        <Grid container spacing={2} sx={{paddingBottom:16}}>
            <Grid item xs={12}>
                <Typography variant='h2' component='h2'>Matt Harrell</Typography>
                <Typography variant='h4' component='h2' sx={{paddingBottom:2}}>Web Developer</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Typography component='h2' variant='h4'>
                    Contact
                </Typography>
                <Contact ContactInfo={props.ContactInfo}/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Typography component='h2' variant='h4'>
                    Proficiencies
                </Typography>
                <Skills Skills={props.Skills}/>
            </Grid>
            <Grid item xs={12}>
                <Typography component='h2' variant='h4'>
                    Experience
                </Typography>
                <Exp ExpData={props.Experience}/>
            </Grid>
            <Grid item xs={12}>
                <Typography component='h2' variant='h4'>
                    Education
                </Typography>
                <Education EducationData={props.Education} />
            </Grid>
        </Grid>
    );
}
export default ResumeComp;