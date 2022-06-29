import {Grid,Box,Typography, List, ListItem, ListItemIcon, ListItemText} from '@mui/material';

import { ContactProps } from '../ResumeCont';

const Contact = (ContactData:ContactProps) => {
    return(
        <List>
             {Object.values(ContactData.ContactInfo).map((contact,index) => 
                <ListItem key={index}>{contact}</ListItem>
            )} 
        </List>
    );
}



export default Contact;