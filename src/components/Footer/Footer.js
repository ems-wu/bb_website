import '../../styles/Footer.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer_col">
                <div className = "footer_logo">
                    <a href = "/">Becoming<br/>Businesswomen</a>
                </div>
                <div className = "footer_navigation-items">
                    <NavLink activeClassName="active" to="/privacy" exact>Privacy</NavLink>
                    <NavLink activeClassName="active" to="/faq">F.A.Q.</NavLink>
                    <NavLink activeClassName="active" to="/tandc">Terms & Conditions</NavLink>
                    <NavLink activeClassName="active" to="/contact">Contact Us</NavLink>
                </div>
                <div className="footer_icons">
                    <a href="https://www.facebook.com/becomingbusinesswomen"><FaFacebook/></a>
                    <a href="https://www.instagram.com/becomingbusinesswomen/"><FaInstagram/></a>
                    <a href="https://www.linkedin.com/company/becoming-businesswomen"><FaLinkedin/></a>
                </div>
            </div>    
            <div className="footer_col">
                <div className="footer_newsletter-head">
                    Join Our Mailing List!
                </div>
                <div className="footer_newsletter-components">
                    <input type="text"/>
                    <button >Join</button>
                </div>
                <div className="footer_author">
                    Created by B.B. Tech Team
                </div>
            </div>
        </footer>
    )
}

export default Footer;