import {Grid,Box,Typography, List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
import { type } from 'os';

import { ContactProps } from '../ResumeCont';

const Contact = (ContactData:ContactProps) => {
    return(
        <List>
             {Object.values(ContactData.ContactInfo).map((contact,index) => {
                if(String(contact).search("@") !== -1){                  
                    return (
                            <ListItem disableGutters key={index}>
                                <a href={`mailto:${contact}`}>{contact}</a>
                            </ListItem>
                    );
                } else if(typeof contact === 'number'){
                    const match = String(contact).match(/^(1|)?(\d{3})(\d{3})(\d{4})$/) || '';
                    let phoneNumber  = ['(', match[2], ') ', match[3], '-', match[4]].join(''); 
                    return (
                        <ListItem disableGutters key={index}>{phoneNumber}</ListItem>
                    );
                } else {
                    return (
                            <ListItem disableGutters key={index}>
                                <a href={`https://${contact}`}>{contact}</a>
                            </ListItem>
                    );
                }
            })} 
        </List>
    );
}



export default Contact;