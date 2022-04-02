import React from 'react'
import image from "../../../assets/Home/shape-bg.png";
import "./Footer.css"

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-parent">
                <img 
                    src={image} 
                    alt='no internet connection' 
                />
            </div>
        </div>
    )
}
