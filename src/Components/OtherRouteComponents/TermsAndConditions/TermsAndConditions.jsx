import React, { useEffect } from "react";
import "./TermsAndConditions.css";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import FloatingCallButton from "../FloatingCallButton/FloatingCallButton";
import Button from "../../../CommonComponents/Button/Button";
import { FaPhone } from "react-icons/fa";

const TermsAndConditions = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="terms-page">
            <Navigation />
            
            {/* Header Section */}
            <section className="terms-hero">
                <div className="terms-hero-overlay"></div>
                <div className="wnf-container">
                    <div className="terms-hero-content">
                        <h1>Terms & Conditions</h1>
                        <p className="last-updated">Last Updated: 1 Jan 2025</p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="terms-content-section">
                <div className="wnf-container">
                    <div className="terms-card">
                        
                        <div className="terms-grid">
                            {/* Section 1 */}
                            <div className="terms-section">
                                <div className="section-header">
                                    <span className="section-num">01</span>
                                    <h2>General Terms</h2>
                                </div>
                                <p>
                                    By using our website and booking services, you agree to comply with our terms and policies.
                                </p>
                            </div>

                            {/* Section 2 */}
                            <div className="terms-section">
                                <div className="section-header">
                                    <span className="section-num">02</span>
                                    <h2>Eligibility & Participation</h2>
                                </div>
                                <ul className="terms-list">
                                    <li><strong>Minimum age requirement:</strong> 18 years</li>
                                    <li>Physically fit individuals can participate.</li>
                                    <li>Parental consent required for minors.</li>
                                </ul>
                            </div>

                            {/* Section 3 */}
                            <div className="terms-section">
                                <div className="section-header">
                                    <span className="section-num">03</span>
                                    <h2>Booking & Payments</h2>
                                </div>
                                <p>
                                    Bookings must be made through our website with full payment. Payment methods include UPI, Credit/Debit cards.
                                </p>
                            </div>

                            {/* Section 4 */}
                            <div className="terms-section">
                                <div className="section-header">
                                    <span className="section-num">04</span>
                                    <h2>Cancellation & Refund Policy</h2>
                                </div>
                                <ul className="terms-list">
                                    <li><strong>More than 7 days before your activity or stay:</strong> Full refund</li>
                                    <li><strong>3-6 days before your activity or stay:</strong> 50% refund</li>
                                    <li><strong>Less than 48 hours:</strong> No refund</li>
                                </ul>
                            </div>

                            {/* Section 5 */}
                            <div className="terms-section">
                                <div className="section-header">
                                    <span className="section-num">05</span>
                                    <h2>Safety & Liability</h2>
                                </div>
                                <p>
                                    Water sports and beach activities involve risk. We provide trained staff and safety gear, but participation is at your own risk.
                                </p>
                            </div>

                            {/* Section 6 */}
                            <div className="terms-section">
                                <div className="section-header">
                                    <span className="section-num">06</span>
                                    <h2>Contact Us</h2>
                                </div>
                                <div className="terms-contact-info">
                                    <p>📍 <strong>Address:</strong> Beyt Dwarka, Gujarat, India</p>
                                    <p>📞 <strong>Phone:</strong> +91 97608 23669</p>
                                    <p>📧 <strong>Email:</strong> info@whynotfly.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="terms-contact-cta MarginTop30px">
                            <p>Need clarification on our terms? Our team is ready to assist.</p>
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

export default TermsAndConditions;
