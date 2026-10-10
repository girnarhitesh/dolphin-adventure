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
    FaYoutube
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
                            Beyt Dwarka's only campsite with on-site{" "}
                            <a
                                href="https://www.bucketlistt.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-content-link"
                            >
                                water sports
                            </a>
                            .
                        </p>
                        <div className="footer-contact">
                            <a href="tel:+916397997489" className="contact-item">
                                <MdPhone size={18} />
                                <span>+91 63979 97489</span>
                            </a>
                            <a href="mailto:info@whynotfly.com" className="contact-item">
                                <MdEmail size={18} />
                                <span>info@whynotfly.com</span>
                            </a>
                        </div>
                        <div className="footer-social">
                            <a href="https://www.facebook.com/people/Why-Not-Fly/61572874630150/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                                <FaFacebookF size={16} />
                            </a>
                            <a href="https://www.instagram.com/whynotfly.in/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                                <FaInstagram size={16} />
                            </a>
                            <a href="https://www.youtube.com/@WhyNotFly_Rishikesh" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="YouTube">
                                <FaYoutube size={16} />
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