import React from 'react';
import { useState } from 'react';
import Login from './Login';
import Signup from './Signup';

const LoginSignupToggle = () => {
    const [activeClass, setActiveClass] = useState('');
    return (
        <div className="wrapper flex items-center justify-center">
            <div className={`form_container ${activeClass}`}>
                <div>
                    <Signup />
                    <Login />
                </div>
                <div className="overlay-container">
                    <div className="overlay-left">
                        <h1>Welcome Back</h1>
                        <p className='toggle_form_paragrapn'>To keep connected with us please login with your personal info</p>
                        <button onClick={() => setActiveClass('')} id="signIn" className="overlay_btn toggle_form_button">Sign In</button>
                    </div>
                    <div className="overlay-right">
                        <h1>Hello, Friend</h1>
                        <p className='toggle_form_paragrapn'>Enter your personal details and start journey with us</p>
                        <button onClick={() => setActiveClass('right-panel-active')} id="signUp" className="overlay_btn button toggle_form_button">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginSignupToggle;