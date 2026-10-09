import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./PrivacyPolicy.css";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import FloatingCallButton from "../FloatingCallButton/FloatingCallButton";
import Button from "../../../CommonComponents/Button/Button";
import { FaPhone } from "react-icons/fa";

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="privacy-page">
            <Navigation />

            <section className="privacy-hero">
                <div className="privacy-hero-overlay"></div>
                <div className="wnf-container">
                    <div className="privacy-hero-content">
                        <h1>Privacy Policy</h1>
                        <p className="last-updated">Last Updated: 10 Oct 2026</p>
                    </div>
                </div>
            </section>

            <section className="privacy-content-section">
                <div className="wnf-container">
                    <div className="privacy-card">
                        <div className="privacy-intro">
                            <p>
                                <strong>Dolphin Adventure</strong> at Beyt Dwarka collects only what we need to book your water sports, dolphin exploration, bonfire, and beach stays, and to keep guests safe on the water and on the campsite.
                            </p>
                        </div>

                        <div className="privacy-grid">
                            <div className="privacy-section">
                                <div className="section-header">
                                    <span className="section-num">01</span>
                                    <h2>Information We Collect</h2>
                                </div>
                                <ul className="privacy-list">
                                    <li><strong>Booking details</strong> such as your name, phone number, email, number of guests, and the activity or stay you choose.</li>
                                    <li><strong>Safety details</strong> when an activity needs them, including age and weight for parasailing, jet ski, banana ride, sofa ride, and ATV.</li>
                                    <li><strong>Stay details</strong> such as check-in date, tent or AC container preference, and meal requirements for Beach Camping or Beach Stay.</li>
                                    <li><strong>Payment details</strong>, which are handled by our payment partners. We do not store your full card number.</li>
                                    <li><strong>Website data</strong> such as cookies and IP address, used to keep the site working and to understand how it is used.</li>
                                </ul>
                            </div>

                            <div className="privacy-section">
                                <div className="section-header">
                                    <span className="section-num">02</span>
                                    <h2>How We Use Your Information</h2>
                                </div>
                                <ul className="privacy-list">
                                    <li>To confirm bookings for parasailing, jet ski, speed boat, banana ride, sofa ride, ATV, dolphin exploration, bonfire, and camp stays.</li>
                                    <li>To check age and weight limits and to brief guests before an activity.</li>
                                    <li>To send booking updates, timing changes caused by weather or sea conditions, and replies to your questions.</li>
                                    <li>To improve this website. We do not sell your information.</li>
                                </ul>
                            </div>

                            <div className="privacy-section">
                                <div className="section-header">
                                    <span className="section-num">03</span>
                                    <h2>Who We Share It With</h2>
                                </div>
                                <p>
                                    We share booking and payment details only with the staff running your activity or stay, and with the payment service that processes your UPI or card payment. We do not share your details with other businesses for their own marketing.
                                </p>
                            </div>

                            <div className="privacy-section">
                                <div className="section-header">
                                    <span className="section-num">04</span>
                                    <h2>Your Rights</h2>
                                </div>
                                <p>
                                    You can ask to see, correct, or delete the personal details we hold. Write to <a href="mailto:info@beytdwarka.com">info@beytdwarka.com</a> or call <a href="tel:+917201060500">+91 7201060500</a>. We may keep a booking record where we need it for accounts, refunds, or a safety incident. Read our <Link to="/terms-and-conditions">Terms & Conditions</Link> for how bookings work.
                                </p>
                            </div>
                        </div>

                        <div className="privacy-contact-cta MarginTop30px PaddingTop30px">
                            <p>Have questions about your privacy? We're here to help.</p>
                            <Button
                                href="tel:+917201060500"
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
