import React, { useEffect } from "react";
import "./RefundPolicy.css";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import FloatingCallButton from "../FloatingCallButton/FloatingCallButton";
import Button from "../../../CommonComponents/Button/Button";
import { FaPhone } from "react-icons/fa";

const RefundPolicy = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="refund-page">
            <Navigation />
            
            {/* Header Section */}
            <section className="refund-hero">
                <div className="refund-hero-overlay"></div>
                <div className="wnf-container">
                    <div className="refund-hero-content">
                        <h1>Refund & Cancellation Policy</h1>
                        <p className="last-updated">Last Updated: 1 Jan 2025</p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="refund-content-section">
                <div className="wnf-container">
                    <div className="refund-card">
                        <div className="refund-intro">
                            <p>
                                We strive to offer the best paragliding experience. However, we understand that plans can change. Below is our refund and cancellation policy:
                            </p>
                        </div>

                        <div className="refund-grid">
                            {/* Section 1 */}
                            <div className="refund-section">
                                <div classNa    me="section-header">
                                    <span className="section-num">01</span>
                                    <h2>Cancellation by Customer</h2>
                                </div>
                                <ul className="refund-list">
                                    <li><strong>72+ hours before flight:</strong> Full refund.</li>
                                    <li><strong>24-72 hours before flight:</strong> 50% refund.</li>
                                    <li><strong>Less than 24 hours:</strong> No refund.</li>
                                </ul>
                            </div>

                            {/* Section 2 */}
                            <div className="refund-section">
                                <div className="section-header">
                                    <span className="section-num">02</span>
                                    <h2>Cancellation by Us</h2>
                                </div>
                                <p>
                                    We may cancel flights due to weather conditions or safety concerns. In such cases:
                                </p>
                                <ul className="refund-list">
                                    <li>You will receive a <strong>full refund</strong></li>
                                    <li>You can <strong>reschedule</strong> at no extra cost.</li>
                                </ul>
                            </div>

                            {/* Section 3 */}
                            <div className="refund-section">
                                <div className="section-header">
                                    <span className="section-num">03</span>
                                    <h2>Refund Process</h2>
                                </div>
                                <p>
                                    Refunds are processed within <strong>5-7 business days</strong> via the original payment method.
                                </p>
                            </div>
                        </div>

                        <div className="refund-contact-cta MarginTop30px">
                            <p>For cancellations or refund inquiries, please contact our support team.</p>
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

export default RefundPolicy;
