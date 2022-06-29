import {Grid,Box,Typography, List, ListItem, ListItemIcon, ListItemText} from '@mui/material';

import { SkillsProps } from '../ResumeCont';

const Skills = ({Skills}:SkillsProps) => {
    return(
        <List>
             {Skills.map((skill,index) => (
                <ListItem key={index}>{skill}</ListItem>
             ))}
        </List>
    );
}



export default Skills;