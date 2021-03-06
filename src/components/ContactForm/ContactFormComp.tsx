import { Grid,FormControl,TextField, Button, Container, Typography,Box } from '@mui/material';
import Scroll from 'react-scroll';
interface contactFormCompProps {
    name:string;
    email:string;
    message:string;
    sendEmail:(event:{ preventDefault: () => void; }) => void;
    handleNameChange:(event:any) => void;
    handleEmailChange:(event:any) => void;
    handleMessageChange:(event:any) => void;
    hideForm:string;
    showThanks:string;
}

const Element = Scroll.Element;

const ContFormComp = (props:contactFormCompProps) => {

    return(
    <Element name='scrollToContact'>
        <Container id='contactForm' sx={{paddingBottom:15}}>
            <Typography component='h2' variant='h3' sx={{textAlign:'center',marginBottom:2,display:props.hideForm}}>
                Contact Me
            </Typography>
            <FormControl fullWidth sx={{display:props.hideForm}}>
                <Grid container spacing={{xs:2}}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            type="text" 
                            name="user_name"
                            required 
                            value={props.name} 
                            onChange={props.handleNameChange}
                            label="Name"
                            placeholder='Jane Doe'
                            sx={{width:'100%'}}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        type="text" 
                        name="user_email"
                        required 
                        value={props.email} 
                        onChange={props.handleEmailChange}
                        label="Email"
                        placeholder='example@example.com'
                        sx={{width:'100%'}}
                    />
                    </Grid>
                </Grid>
                <TextField
                    type="text" 
                    name="message"
                    required
                    multiline
                    rows={4} 
                    value={props.message} 
                    onChange={props.handleMessageChange}
                    label="Message"
                    placeholder='Please leave a detailed message'
                    variant='filled'
                    sx={{marginY:5}}
                />
                <Button variant="contained" 
                    disableElevation
                    type='submit'
                    color='secondary'
                    onClick={props.sendEmail}
                    sx={{width:'fit-content',margin:'auto',paddingX:3,paddingY:1}}
                >
                    Submit
                </Button>
                {/* <textarea name="message"  value={props.message} onChange={props.handleMessageChange}/> */}
                {/* <input type="submit" value="Send" /> */}
            </FormControl>
            <Box sx={{display:props.showThanks}}>
                <Typography component='p' variant='h3' sx={{textAlign:'center'}}>
                    Thank you for reaching out! 
                </Typography>
                <Typography component='p' variant='h4' sx={{textAlign:'center',marginTop:5}}>
                    I will email you soon.
                </Typography>
            </Box>
        </Container>
    </Element>
    
    );

}
export default ContFormComp;