import React, { Component } from "react";
import './title.css';

class Title extends Component {
    render(){
        return (
            <div className="title_container">
                <div className="hero">
                    <img className="title_image" src='nmc_caps.png' alt="Not Micah Clark" />
                    <h1 className="title_text">NOT MICAH CLARK</h1>
                </div>
            </div>
        )
    }
}

export default Title;