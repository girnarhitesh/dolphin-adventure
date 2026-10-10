import React from "react";
import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdArrowForward
} from "react-icons/md";
import {
    FaFacebookF,
    FaInstagram,
    FaWhatsapp
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="wnf-container">
                <div className="footer-grid MarginBottom10px">
                    <div className="footer-col brand-col">
                        <div className="footer-logo">
                            <img src="/Images/dolphin-adventure-logo.png" alt="Dolphin Adventure" className="footer-logo-img" />
                        </div>
                        <p>
                            Beyt Dwarka's only campsite with water sports on the beach.
                        </p>
                        <div className="footer-contact">
                            <a href="tel:+917201060500" className="contact-item">
                                <MdPhone size={18} />
                                <span>+91 7201060500</span>
                            </a>
                            <a href="mailto:info@beytdwarka.com" className="contact-item">
                                <MdEmail size={18} />
                                <span>info@beytdwarka.com</span>
                            </a>
                        </div>
                        <div className="footer-social">
                            <a href="https://www.facebook.com/ajay.kateshiya.manu247" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                                <FaFacebookF size={16} />
                            </a>
                            <a href="https://www.instagram.com/beytdwarka_tourism?igsh=b3NyNHQ2dnRnYWhr" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                                <FaInstagram size={16} />
                            </a>
                            <a href="https://api.whatsapp.com/send/?phone=917201060500&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp">
                                <FaWhatsapp size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Useful Links */}
                    <div className="footer-col">
                        <h4 className="footer-heading">Useful Links</h4>
                        <ul className="footer-links">
                            <li><Link to="/"><MdArrowForward size={14} /> Home</Link></li>
                            <li><Link to="/#about"><MdArrowForward size={14} /> About</Link></li>
                            <li><Link to="/#reviews"><MdArrowForward size={14} /> Reviews</Link></li>
                        </ul>
                    </div>

                    {/* Legal & Policies */}
                    <div className="footer-col">
                        <h4 className="footer-heading">Legal & Policies</h4>
                        <ul className="footer-links">
                            <li><Link to="/terms-and-conditions"><MdArrowForward size={14} /> Terms & Conditions</Link></li>
                            <li><Link to="/privacy-policy"><MdArrowForward size={14} /> Privacy Policy</Link></li>
                            <li><Link to="/refund-policy"><MdArrowForward size={14} /> Refund & Cancellation</Link></li>
                            <li><Link to="/liability-waiver"><MdArrowForward size={14} /> Liability Waiver</Link></li>
                        </ul>
                    </div>

                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <div className="footer-bottom-left">
                        <span className="copyright">Copyright © {currentYear} <strong>Dolphin Adventure</strong>. All Rights Reserved.</span>
                        <div className="powered-by">
                            <span>| Powered by</span>
                            <a href="https://okghumo.in" target="_blank" rel="noopener noreferrer">
                                <img src="https://okghumo.com/Images/OkGhumoLogo.png" alt="OkGhumo" className="okghumo-logo" />
                            </a>
                        </div>
                    </div>
                    <div className="bottom-links">
                        <Link to="/privacy-policy">Privacy</Link>
                        <span className="dot">•</span>
                        <Link to="/terms-and-conditions">Terms</Link>
                        {/* <span className="dot">•</span>
                        <Link to="/sitemap">Site Map</Link> */}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;