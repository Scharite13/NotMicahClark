import React, { Component } from "react";
import './title.css';

class Title extends Component {
    render(){
        return (
            <div className="title_container">
                <div className="hero">
                    <img className="title_image" src='nmc_fulltitle.png' alt="Not Micah Clark" />    
                </div>
            </div>
        )
    }
}

export default Title;