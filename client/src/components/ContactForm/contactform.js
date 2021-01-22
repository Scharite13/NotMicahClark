import React from 'react';
import './styles.contactform.css';


function ContactForm() {


    return (
        <div className="contact-container">

            
            <img className="letter-img"  src="contact_form_imagepng.png" alt="Mail Letter Image"/>
            <form>
                <input type="text" id="fname" name="firstname" placeholder="Name..." />
                <input type="text" id="email" name="email" placeholder="Email..." />
                <textarea id="subject" name="subject" placeholder="Your message..." />
                <input type="submit" value="Submit"/>
            </form>
            
           
        </div>
    );
}

export default ContactForm;






{/* <input type="text" id="lname" name="lastname" placeholder="Your last name..." /> */}