import React, { Component } from "react";
import './styles.title.css';
import { Link } from 'react-router-dom';

class Title extends Component {
    render(){
        return (
            <div className="title_container">
                <Link className="hero" to='/'>
                    <img className="title_image" src='nmc_fulltitle.png' alt="Not Micah Clark" />    
                </Link>
            </div>
        )
    }
}

export default Title;