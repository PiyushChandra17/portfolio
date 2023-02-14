import React from 'react'
import Typical from 'react-typical'
import "./Profile.css"
import ScrollService from '../../../utilities/ScrollService';

export default function Profile() {
    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <div className="colz-icon">

                            <a href="https://github.com/PiyushChandra17">
                                <i className="fa fa-github-square"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/piyushthisside/">
                                <i className="fa fa-linkedin-square"></i>
                            </a>
                            
                            <a href="https://www.facebook.com/piyushthisside/">
                                <i className="fa fa-facebook-square"></i>
                            </a>
                            <a href="https://www.instagram.com/piyush.chandra.17/?hl=en">
                                <i className="fa fa-instagram"></i>
                            </a>
                            <a href="https://www.youtube.com/">
                                <i className="fa fa-youtube-square"></i>
                            </a>
                            <a href="https://twitter.com/piyushxjs">
                                <i className="fa fa-twitter-square"></i>
                            </a>
                            <a href="https://in.pinterest.com/">
                                <i className="fa fa-pinterest-square"></i>
                            </a>
                            <a href="https://www.reddit.com/user/piyush_js">
                                <i className="fa fa-reddit-square"></i>
                            </a>
                            
                            
                        </div>
                    </div>

                    <div className="profile-details-name">
                        <span className="primary-text">
                            {" "}
                            Hi there! I am  <span className="highlighted-text">Piyush Chandra</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="primary-text">
                            {" "}
                            <h1>
                                {" "}
                                <Typical 
                                    loop={Infinity}
                                    steps={[
                                        "Enthusiastic Developer 😇",
                                        1000,
                                        "Full Stack Developer 💻",
                                        1000,
                                        "MERN Stack Developer 😎",
                                        1000,
                                        "React/React Native Developer 📱",
                                        1000,
                                        "Cross Platform Dev 🌐",
                                        1000,
                                        "Let's Goooooo 🚀",
                                        1000,
                                    ]}
                                />

                            </h1>
                            <span className='profile-role-tagline'>
                                A Full Stack web developer with Specialization in JavaScript.
                            </span>
                        </span>
                    </div>
                    <div className="profile-options">
                        <button className="btn primary-btn"
                        onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                        >
                            {""}
                            Contact Me{" "}
                        </button>
                        <a href='piyush.pdf' download='piyush.pdf'>
                            <button className="btn highlighted-btn">Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
