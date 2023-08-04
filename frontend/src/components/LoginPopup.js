import React, { useState } from "react";
import logo from '../assets/logo.png';
import './LoginPopup.css';
import ggl from '../assets/google.png';

const LoginPopup = ({ onClose }) => {
    // State to handle the visibility of the login popup
    const [showPopup, setShowPopup] = useState(true);

    const closePopup = () => {
        setShowPopup(false);
        onClose();
    };

    return showPopup ? (
        <div className="login-popup-overlay">
            <div className="login-popup">
                <span><img src={logo} alt="logo"></img></span>
                <form className="login-form">
                    <label>
                        <input className="inpt1" type="email" placeholder="Email" />
                    </label>
                    <label >
                        <input className="inpt2" type="password" placeholder="Password" />
                    </label>
                    <div className="cptdiv">
                        <div className="wcpt1">SAISW</div>
                        <label>
                            <div className="wcpt2">
                                <input className="cpt" type="text" placeholder="Enter captcha" />
                            </div>
                        </label>
                    </div>
                    <div>
                        <label>
                            <input className="form-submit-button" type="submit" value="Submit" />
                        </label>
                    </div>
                </form>
                <p>OR</p>
                <p>Login with <span className="google"><img src={ggl} alt="google" className="ggle"></img></span></p>
                <button className="close-button" onClick={closePopup}>Close</button>
            </div>
        </div>
    ) : null;
};

export default LoginPopup;
