
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
    <form onSubmit={props.sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" value={props.name} onChange={props.handleNameChange} />
      <label>Email</label>
      <input type="email" name="user_email" value={props.email} onChange={props.handleEmailChange} />
      <label>Message</label>
      <textarea name="message"  value={props.message} onChange={props.handleMessageChange}/>
      <input type="submit" value="Send" />
    </form>
    );

}
export default ContFormComp;