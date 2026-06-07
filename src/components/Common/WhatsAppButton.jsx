import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
    // Replace with your actual WhatsApp number or link
    const whatsappLink = "https://wa.me/16133664271";

    return (
        <a href={whatsappLink} className="whatsapp-support-btn" target="_blank" rel="noopener noreferrer" aria-label="Support via WhatsApp">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="whatsapp-svg">
                {/* Outer shadow and white circle */}
                <circle cx="30" cy="30" r="28" fill="white" />
                
                {/* Bubble Gradient */}
                <defs>
                    <linearGradient id="bubbleGrad" x1="15" y1="15" x2="45" y2="45" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#00A3FF"/>
                        <stop offset="100%" stopColor="#B300FF"/>
                    </linearGradient>
                </defs>
                
                {/* Chat Bubble Icon */}
                <path d="M30 16C21.7157 16 15 22.7157 15 31C15 33.87 15.86 36.56 17.34 38.86L15 46L22.14 43.66C24.44 45.14 27.13 46 30 46C38.2843 46 45 39.2843 45 31C45 22.7157 38.2843 16 30 16ZM30 41C27.75 41 25.64 40.4 23.8 39.34L23.36 39.08L18.86 40.54L20.32 36.04L20.06 35.6C18.4 34.34 17.5 32.74 17.5 31C17.5 24.09 23.09 18.5 30 18.5C36.91 18.5 42.5 24.09 42.5 31C42.5 37.91 36.91 41 30 41Z" fill="url(#bubbleGrad)"/>
                
                {/* 3 Dots */}
                <circle cx="23" cy="31" r="2.5" fill="#00C2FF"/>
                <circle cx="30" cy="31" r="2.5" fill="#8844FF"/>
                <circle cx="37" cy="31" r="2.5" fill="#EE00FF"/>
            </svg>
        </a>
    );
};

export default WhatsAppButton;
