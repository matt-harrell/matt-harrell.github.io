import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactFormCont = () => {
  // const [form, setForm] = useState({
  //   name:'',
  //   email:'',
  //   message:'',
  // });
  const [name,setName] = useState('');

  const handleNameChange = (event:any) => {
    setName(event.target.value)
  }

  const [email,setEmail] = useState('');

  const handleEmailChange = (event:any) => {
    setEmail(event.target.value)
  }

  const [message,setMessage] = useState('');

  const handleMessageChange = (event:any) => {
    setMessage(event.target.value)
  }

  const templateParams = {
    user_name:name,
    user_email:email,
    message:message,
  }

  const sendEmail = (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    emailjs.send('service_diitdet', 'template_qiqvfef', templateParams, 'YBbIS61V4apLBjq8g')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" value={name} onChange={handleNameChange} />
      <label>Email</label>
      <input type="email" name="user_email" value={email} onChange={handleEmailChange} />
      <label>Message</label>
      <textarea name="message"  value={message} onChange={handleMessageChange}/>
      <input type="submit" value="Send" />
    </form>
  );
}

export default ContactFormCont;