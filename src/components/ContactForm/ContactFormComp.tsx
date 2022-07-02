import { Grid,FormControl,TextField, Button, Container } from '@mui/material';

interface contactFormCompProps {
    name:string;
    email:string;
    message:string;
    sendEmail:(event:{ preventDefault: () => void; }) => void;
    handleNameChange:(event:any) => void;
    handleEmailChange:(event:any) => void;
    handleMessageChange:(event:any) => void;   
}

const ContFormComp = (props:contactFormCompProps) => {

    return(
    <Container>
        <FormControl fullWidth>
            <TextField
                type="text" 
                name="user_name"
                required 
                value={props.name} 
                onChange={props.handleNameChange}
                label="Name"
                placeholder='Jane Doe'
            />
            {/* <input type="text" name="user_name" value={props.name} onChange={props.handleNameChange} /> */}
            <TextField
                type="text" 
                name="user_email"
                required 
                value={props.email} 
                onChange={props.handleEmailChange}
                label="Email"
                placeholder='example@example.com'
            />
            {/* <input type="email" name="user_email" value={props.email} onChange={props.handleEmailChange} /> */}
            {/* <label>Message</label> */}
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
            />
            <Button variant="contained" 
                disableElevation
                type='submit'
                color='secondary'
                onClick={props.sendEmail}
            >
                Submit
            </Button>
            {/* <textarea name="message"  value={props.message} onChange={props.handleMessageChange}/> */}
            {/* <input type="submit" value="Send" /> */}
        </FormControl>
    </Container>
    );

}
export default ContFormComp;