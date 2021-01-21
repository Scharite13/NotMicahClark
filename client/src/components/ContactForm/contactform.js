import React from 'react';
import './styles.contactform.css';


function ContactForm() {


    return (
        <div>
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