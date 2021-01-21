import React, { Component } from "react";
import './styles.body.css'
import { Link } from 'react-router-dom';

class Body extends Component {
    render(){
        return (
            <div className="grid-container">
                <div className="grid1">
                    <h2 className="sub_title">Podcast</h2>
                </div>
                <div className="grid2">
                    <h2 className="sub_title">Community Post</h2>
                </div>
                <div className="grid3">
                    <Link className="link sub_title" to='/art'>Art</Link>
                
                </div>
                <div className="grid4">
                    <img className="logo" src="nmc_heart.png" alt="NMC LOGO" />
                </div>
                <div className="grid5">
                    <Link className="link sub_title" to='/video'>Video</Link>
                </div>
                <div className="grid6">
                    <h2 className="sub_title">Donations</h2>
                </div>
                <div className="grid7">
                    <h2 className="sub_title">Contact Me</h2>
                </div>
            </div>
        )
    }
}

export default Body;
