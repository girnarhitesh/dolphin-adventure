import React, { useEffect } from "react";
import "./LiabilityWaiver.css";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import FloatingCallButton from "../FloatingCallButton/FloatingCallButton";
import Button from "../../../CommonComponents/Button/Button";
import { FaPhone } from "react-icons/fa";

const LiabilityWaiver = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="waiver-page">
            <Navigation />
            
            {/* Header Section */}
            <section className="waiver-hero">
                <div className="waiver-hero-overlay"></div>
                <div className="wnf-container">
                    <div className="waiver-hero-content">
                        <h1>Liability Waiver</h1>
                        <p className="last-updated">Last Updated: 1 Jan 2025</p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="waiver-content-section">
                <div className="wnf-container">
                    <div className="waiver-card">
                        <div className="waiver-intro">
                            <p>
                                By participating in paragliding with <strong>Why Not Fly</strong>, you agree to release, waive, and hold harmless the company and its staff from any claims, damages, or liabilities.
                            </p>
                        </div>

                        <div className="waiver-grid">
                            {/* Section 1 */}
                            <div className="waiver-section">
                                <div className="section-header">
                                    <span className="section-num">01</span>
                                    <h2>Assumption of Risk</h2>
                                </div>
                                <p>
                                    I understand that paragliding involves inherent risks, including but not limited to:
                                </p>
                                <ul className="waiver-list">
                                    <li>Sudden weather changes</li>
                                    <li>Equipment malfunctions</li>
                                    <li>Physical injuries</li>
                                </ul>
                            </div>

                            {/* Section 2 */}
                            <div className="waiver-section">
                                <div className="section-header">
                                    <span className="section-num">02</span>
                                    <h2>Health & Fitness Declaration</h2>
                                </div>
                                <p>
                                    I confirm that I am medically fit to participate and have disclosed any medical conditions that may affect my ability to fly.
                                </p>
                            </div>

                            {/* Section 3 */}
                            <div className="waiver-section">
                                <div className="section-header">
                                    <span className="section-num">03</span>
                                    <h2>Waiver of Liability</h2>
                                </div>
                                <p>
                                    I voluntarily assume all risks and release Why Not Fly from any legal claims arising from my participation.
                                </p>
                            </div>
                        </div>

                        <div className="waiver-acknowledgment MarginTop30px">
                            <p>
                                By signing this waiver (or proceeding with the booking), I acknowledge that I have read and understood its terms.
                            </p>
                        </div>

                        <div className="waiver-contact-cta MarginTop30px">
                            <p>Have questions about our liability policies? Reach out to our safety team.</p>
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

export default LiabilityWaiver;
