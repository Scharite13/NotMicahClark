import React, { useState } from 'react';
import './styles.contactform.css';


function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, message)
        setName('') 
        setEmail('')
        setMessage('')       

    }


    return (
        <div className="contact-container">
            <form className="contact-form" onSubmit={handleSubmit}>
                <input type="text" value={name} id="name" name="firstname" placeholder="Name..." onChange={(e) => setName(e.target.value)}/>
                <input type="email" value={email} id="email" name="email" placeholder="Email..." onChange={(e) => setEmail(e.target.value)}/>
                <img className="letter-img"  src="contact_form_imagepng.png" alt="Mail Letter"/>
                <textarea id="subject" value={message} name="subject" placeholder="Your message..." onChange={(e) => setMessage(e.target.value)}/>
                <input type="submit" value="Submit" />
            </form>
            
           
        </div>
    );
}

export default ContactForm;






