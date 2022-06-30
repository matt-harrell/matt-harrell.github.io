import {Grid,Box,Typography, List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { SkillsProps } from '../ResumeCont';

const Skills = ({Skills}:SkillsProps) => {

    const skillsOddorEven = (Skills.length % 2 === 0) ? true : false;

   let skillsHalf = skillsOddorEven ? Math.floor(Skills.length / 2) : Math.floor(Skills.length / 2) + 1;
   let skillsFirstHalf = Skills.slice(0, skillsHalf);
   let skillsSecondHalf = Skills?.slice(skillsHalf, Skills?.length);

    return(
        // <List>
        //      {Skills.map((skill,index) => (
        //         <ListItem key={index}>{skill}</ListItem>
        //      ))}
        // </List>
         <Grid container spacing={{xs:1}}>
         <Grid item xs={6}>
             <List>
                 {skillsFirstHalf.map((skill,index) => {
                     return(
                         <ListItem key={index} sx={{padding:0}}>
                             <ListItemIcon>
                                <ArrowForwardIosIcon color='secondary'/>
                             </ListItemIcon>
                             <ListItemText primary={skill} sx={{color:"black"}}/>                                    
                         </ListItem>
                     )
                 })}
             </List>
         </Grid>
         <Grid item xs={6}>
             <List>
                 {skillsSecondHalf.map((skill,index) => {
                     return(
                         <ListItem key={index} sx={{padding:0}}>
                             <ListItemIcon>
                                <ArrowForwardIosIcon color='secondary'/>
                             </ListItemIcon>
                             <ListItemText primary={skill} sx={{color:"black"}}/>                                    
                         </ListItem>
                     )
                 })}
             </List>
         </Grid>
     </Grid>
    );
}



export default Skills;