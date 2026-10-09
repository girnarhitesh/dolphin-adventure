import React, { useEffect } from "react";
import "./PrivacyPolicy.css";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import FloatingCallButton from "../FloatingCallButton/FloatingCallButton";
import Button from "../../../CommonComponents/Button/Button";
import { FaPhone } from "react-icons/fa";

const PrivacyPolicy = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="privacy-page">
            <Navigation />

            {/* Header Section */}
            <section className="privacy-hero">
                <div className="privacy-hero-overlay"></div>
                <div className="wnf-container">
                    <div className="privacy-hero-content">
                        {/* <span className="privacy-badge">Legal</span> */}
                        <h1>Privacy Policy</h1>
                        <p className="last-updated">Last Updated: 1 Jan 2025</p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="privacy-content-section">
                <div className="wnf-container">
                    <div className="privacy-card">
                        <div className="privacy-intro">
                            <p>
                                At <strong>Why Not Fly</strong>, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information.
                            </p>
                        </div>

                        <div className="privacy-grid">
                            {/* Section 1 */}
                            <div className="privacy-section">
                                <div className="section-header">
                                    <span className="section-num">01</span>
                                    <h2>Information We Collect</h2>
                                </div>
                                <ul className="privacy-list">
                                    <li><strong>Personal details</strong> (Name, Email, Phone, Address) when booking a flight.</li>
                                    <li><strong>Payment details</strong> (processed securely via third-party payment gateways).</li>
                                    <li><strong>Browsing data</strong> (cookies, IP address) for website improvement.</li>
                                </ul>
                            </div>

                            {/* Section 2 */}
                            <div className="privacy-section">
                                <div className="section-header">
                                    <span className="section-num">02</span>
                                    <h2>How We Use Your Information</h2>
                                </div>
                                <ul className="privacy-list">
                                    <li>To <strong>confirm bookings</strong> and process payments.</li>
                                    <li>To <strong>send updates</strong>, offers, and promotional content.</li>
                                    <li>To <strong>improve our website</strong> and customer experience.</li>
                                </ul>
                            </div>

                            {/* Section 3 */}
                            <div className="privacy-section">
                                <div className="section-header">
                                    <span className="section-num">03</span>
                                    <h2>Data Protection</h2>
                                </div>
                                <p>
                                    We implement <strong>strict security measures</strong> to protect your personal data and do not sell or share your information with third parties.
                                </p>
                            </div>

                            {/* Section 4 */}
                            <div className="privacy-section">
                                <div className="section-header">
                                    <span className="section-num">04</span>
                                    <h2>Your Rights</h2>
                                </div>
                                <p>
                                    You can request access, modification, or deletion of your personal data by contacting us at <a href="mailto:info@whynotfly.in">info@whynotfly.in</a>. For more details, read our full Privacy Policy or contact us.
                                </p>
                            </div>
                        </div>

                        <div className="privacy-contact-cta MarginTop30px PaddingTop30px">
                            <p>Have questions about your privacy? We're here to help.</p>
                            <Button
                                href="tel:+916397997489"
                                icon={<FaPhone />}
                            >
                                Contact Support
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <FloatingCallButton />
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
