import React, { Component } from "react";
import './styles.body.css'
import { Link } from 'react-router-dom';
import ContactForm from '../ContactForm/contactform';

class Body extends Component {
    render(){
        return (
            <div className="grid-container">
                <div className="grid1">
                    <h2 className="sub_title">About Me</h2>
                </div>
                <div className="grid2">
                    <h2 className="sub_title">Donations</h2>
                </div>
                <div className="grid3">
                    <Link className="link sub_title" to='/art'>Art</Link>
                    <p>Feugiat pretium nibh ipsum consequat nisl vel pretium. Sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis.</p>
                
                </div>
                <div className="grid4">
                    <img className="logo" src="nmc_heart.png" alt="NMC LOGO" />
                </div>
                <div className="grid5">
                    <Link className="link sub_title" to='/video'>Video</Link>
                    <p>Ut sem viverra aliquet eget sit amet tellus cras adipiscing. Tristique nulla aliquet enim tortor at auctor. Volutpat consequat mauris nunc congue nisi vitae. Tempus imperdiet nulla malesuada pellentesque.</p>
                </div>
                <div className="grid6">
                    <h2 className="sub_title">Podcast</h2>
                </div>
                <div className="grid7">
                    <h2 className="sub_title">Contact Me</h2>
                    <ContactForm/>
                </div>
            </div>
        )
    }
}

export default Body;
