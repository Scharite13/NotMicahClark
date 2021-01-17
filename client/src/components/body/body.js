import React, { Component } from "react";
import './body.css'

class Body extends Component {
    render(){
        return (
            <div className="grid-container">
                <div className="grid1">
                    <p>Podcast</p>
                </div>
                <div className="grid2">
                    <p>Video</p>
                </div>
                <div className="grid3">
                    <p>Art</p>
                </div>
                <div className="grid4">
                    <img src="nmc_logopng.png" alt="NMC LOGO" />
                </div>
                <div className="grid5">
                    <p>Community Post</p>
                </div>
                <div className="grid6">
                    <p>Donations</p>
                </div>
                <div className="grid7">
                    <p>Contact Me</p>
                </div>
            </div>
        )
    }
}

export default Body;
