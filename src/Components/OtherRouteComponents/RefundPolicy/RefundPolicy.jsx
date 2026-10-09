import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./RefundPolicy.css";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import FloatingCallButton from "../FloatingCallButton/FloatingCallButton";
import Button from "../../../CommonComponents/Button/Button";
import { FaPhone } from "react-icons/fa";

const RefundPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="refund-page">
            <Navigation />

            <section className="refund-hero">
                <div className="refund-hero-overlay"></div>
                <div className="wnf-container">
                    <div className="refund-hero-content">
                        <h1>Refund & Cancellation Policy</h1>
                        <p className="last-updated">Last Updated: 10 Oct 2026</p>
                    </div>
                </div>
            </section>

            <section className="refund-content-section">
                <div className="wnf-container">
                    <div className="refund-card">
                        <div className="refund-intro">
                            <p>
                                This policy covers every booking with <strong>Dolphin Adventure</strong> at Beyt Dwarka: parasailing, jet ski, speed boat, banana ride, sofa ride, ATV, dolphin exploration, the camping bonfire, Beach Camping, and Beach Stay. The same windows are listed in our <Link to="/terms-and-conditions">Terms & Conditions</Link>.
                            </p>
                        </div>

                        <div className="refund-grid">
                            <div className="refund-section">
                                <div className="section-header">
                                    <span className="section-num">01</span>
                                    <h2>Day Activities</h2>
                                </div>
                                <p>
                                    Parasailing, jet ski, speed boat, banana ride, sofa ride, and ATV are counted from the booked start time.
                                </p>
                                <ul className="refund-list">
                                    <li><strong>More than 48 hours before:</strong> full refund.</li>
                                    <li><strong>24 to 48 hours before:</strong> 50% refund.</li>
                                    <li><strong>Less than 24 hours, or a no-show:</strong> no refund.</li>
                                </ul>
                            </div>

                            <div className="refund-section">
                                <div className="section-header">
                                    <span className="section-num">02</span>
                                    <h2>Camp Stays</h2>
                                </div>
                                <p>
                                    Beach Camping and Beach Stay are counted from check-in. The bonfire, meals, and dolphin exploration included with a stay follow the stay booking.
                                </p>
                                <ul className="refund-list">
                                    <li><strong>More than 7 days before check-in:</strong> full refund.</li>
                                    <li><strong>3 to 7 days before check-in:</strong> 50% refund.</li>
                                    <li><strong>Inside 72 hours, or a no-show:</strong> no refund.</li>
                                </ul>
                            </div>

                            <div className="refund-section">
                                <div className="section-header">
                                    <span className="section-num">03</span>
                                    <h2>When We Cancel</h2>
                                </div>
                                <p>
                                    We may cancel or move an activity or stay for weather, sea conditions, or safety. You can take a full refund or a free reschedule.
                                </p>
                                <ul className="refund-list">
                                    <li>A ride stopped because a guest is unsafe, or under the influence of alcohol or drugs, is not refunded.</li>
                                    <li>A guest outside the age or weight limit for that activity cannot take part and is not refunded if they arrive anyway.</li>
                                </ul>
                            </div>

                            <div className="refund-section">
                                <div className="section-header">
                                    <span className="section-num">04</span>
                                    <h2>How Refunds Are Paid</h2>
                                </div>
                                <p>
                                    Approved refunds go back to the original UPI or card payment within <strong>5 to 7 business days</strong>.
                                </p>
                                <ul className="refund-list">
                                    <li><strong>Phone:</strong> <a href="tel:+917201060500">+91 7201060500</a></li>
                                    <li><strong>Email:</strong> <a href="mailto:info@beytdwarka.com">info@beytdwarka.com</a></li>
                                    <li><strong>Address:</strong> Dolphin Adventure, Beyt Dwarka, Gujarat, India</li>
                                </ul>
                            </div>
                        </div>

                        <div className="refund-contact-cta MarginTop30px">
                            <p>To cancel a booking, call or write to us with your name and the activity or stay date.</p>
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

export default RefundPolicy;
