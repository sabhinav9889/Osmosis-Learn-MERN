import React from "react"

import './Footer.css'
import logo from '../assets/footerimg.png'

const Footer = () => {
  return (
    <div className="container">
      <ul>
        <li>About Us</li>
        <li>Privacy Policy</li>
      </ul>
      <ul>
        <li><img className="logo" src={logo} alt="logo" /></li>
      </ul>
      <ul>
        <li>We Love to hear From You</li>
      </ul>
    </div>
  )
};

export default Footer;
