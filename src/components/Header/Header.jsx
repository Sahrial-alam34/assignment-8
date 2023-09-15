import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <>
            <nav className='header'>
                <div>
                <h3>Knowledge Cafe</h3>
                </div>
                <div className='link-part'>
                    <a href="/skill">Develop Your Skill</a>
                    <a href="/contactUs">Contact Us</a>
                    <a href="/login">Login</a>
                </div>
            </nav>
            
        </>
    );
};

export default Header;