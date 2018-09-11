import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
    </ul>
  )
};

export default Footer;