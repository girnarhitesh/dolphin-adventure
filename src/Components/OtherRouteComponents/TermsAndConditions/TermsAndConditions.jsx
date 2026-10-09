import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./TermsAndConditions.css";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import FloatingCallButton from "../FloatingCallButton/FloatingCallButton";
import Button from "../../../CommonComponents/Button/Button";
import { FaPhone } from "react-icons/fa";

const TermsAndConditions = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="terms-page">
            <Navigation />

            <section className="terms-hero">
                <div className="terms-hero-overlay"></div>
                <div className="wnf-container">
                    <div className="terms-hero-content">
                        <h1>Terms & Conditions</h1>
                        <p className="last-updated">Last Updated: 10 Oct 2026</p>
                    </div>
                </div>
            </section>

            <section className="terms-content-section">
                <div className="wnf-container">
                    <div className="terms-card">
                        <div className="terms-grid">
                            <div className="terms-section">
                                <div className="section-header">
                                    <span className="section-num">01</span>
                                    <h2>General Terms</h2>
                                </div>
                                <p>
                                    These terms apply to every booking made with <strong>Dolphin Adventure</strong> on our private beach at Beyt Dwarka, Gujarat. By using this website or joining an activity or stay, you agree to these terms, the <Link to="/refund-policy">Refund & Cancellation Policy</Link>, the <Link to="/privacy-policy">Privacy Policy</Link>, and the <Link to="/liability-waiver">Liability Waiver</Link>.
                                </p>
                            </div>

                            <div className="terms-section">
                                <div className="section-header">
                                    <span className="section-num">02</span>
                                    <h2>Activities & Stays</h2>
                                </div>
                                <p>Water sports run from 9:00 AM until sunset, subject to sea and weather conditions.</p>
                                <ul className="terms-list">
                                    <li><strong>Parasailing</strong> — 5 to 8 minutes. Ages 10 and above, 30 to 100 kg. Harness, life jacket, and an experienced captain.</li>
                                    <li><strong>Jet Ski Ride</strong> — 5 to 7 minutes. Ages 12 and above, up to 100 kg. Trained rider and life jacket.</li>
                                    <li><strong>Speed Boat</strong> — 10 to 15 minutes. Ages 5 and above. Experienced captain and life jacket.</li>
                                    <li><strong>Banana Ride</strong> — 8 to 10 minutes. Ages 8 and above, up to 100 kg. Life jacket and trained staff.</li>
                                    <li><strong>Sofa Ride</strong> — 8 to 10 minutes, up to 3 riders. Ages 8 and above, up to 100 kg. Life jacket and trained staff.</li>
                                    <li><strong>ATV Ride</strong> — 10 minutes on a guided beach track. Ages 12 and above, up to 110 kg. Helmet provided.</li>
                                    <li><strong>Dolphin Exploration</strong> — boat ride included with Beach Camping, run when sea conditions allow.</li>
                                </ul>
                            </div>

                            <div className="terms-section">
                                <div className="section-header">
                                    <span className="section-num">03</span>
                                    <h2>Camp Stays</h2>
                                </div>
                                <ul className="terms-list">
                                    <li><strong>Beach Camping</strong> — 1 night and 2 days in a Swiss tent or AC container. Check-in 10:00 AM, check-out 9:00 AM. Includes 2 breakfasts, lunch, dinner and high tea, bonfire and DJ night, and dolphin exploration.</li>
                                    <li><strong>Beach Stay</strong> — 1 night. Check-in 5:00 PM, check-out 8:30 AM. Includes dinner and breakfast, an attached washroom, and AC options where booked.</li>
                                    <li><strong>Camping Bonfire</strong> — included with a camp stay, from 8:00 PM, with DJ, garba, and beach seating. All ages.</li>
                                    <li>Prices shown on the website are per person and apply at the time of booking. Meals and activities not listed with a stay are charged separately.</li>
                                </ul>
                            </div>

                            <div className="terms-section">
                                <div className="section-header">
                                    <span className="section-num">04</span>
                                    <h2>Eligibility</h2>
                                </div>
                                <ul className="terms-list">
                                    <li>Each activity has its own age and weight limit. Guests outside that limit cannot take part.</li>
                                    <li>Guests under 18 must be booked and accompanied by a parent or guardian.</li>
                                    <li>Guests should be well enough for the activity they choose. Tell our team about any condition that could affect safety on the water, in the air, or on an ATV.</li>
                                    <li>Life jackets are required on every water activity. The parasailing harness and the ATV helmet must stay on for the full ride.</li>
                                </ul>
                            </div>

                            <div className="terms-section">
                                <div className="section-header">
                                    <span className="section-num">05</span>
                                    <h2>Booking & Payments</h2>
                                </div>
                                <p>
                                    Bookings are confirmed only after we accept them and payment is received. You can pay by UPI or by credit or debit card. A booking covers the activity or stay named on it, for the date and number of guests you give us. Please arrive on time. A missed slot is treated as a no-show.
                                </p>
                            </div>

                            <div className="terms-section">
                                <div className="section-header">
                                    <span className="section-num">06</span>
                                    <h2>Cancellation & Refunds</h2>
                                </div>
                                <ul className="terms-list">
                                    <li><strong>Day activities, more than 48 hours before:</strong> full refund.</li>
                                    <li><strong>Day activities, 24 to 48 hours before:</strong> 50% refund.</li>
                                    <li><strong>Stays, more than 7 days before check-in:</strong> full refund.</li>
                                    <li><strong>Stays, 3 to 7 days before check-in:</strong> 50% refund.</li>
                                    <li><strong>Inside 24 hours for an activity, inside 72 hours for a stay, or a no-show:</strong> no refund.</li>
                                </ul>
                                <p>
                                    The full rules are on our <Link to="/refund-policy">Refund & Cancellation</Link> page. If we cancel for weather, sea conditions, or safety, you can take a full refund or a free reschedule.
                                </p>
                            </div>

                            <div className="terms-section">
                                <div className="section-header">
                                    <span className="section-num">07</span>
                                    <h2>Safety</h2>
                                </div>
                                <p>
                                    Parasailing, jet ski, boat rides, banana and sofa rides, ATV riding, dolphin exploration, and the beach bonfire all carry risk. Our captains and staff give a safety briefing and can stop or shorten an activity when the sea, weather, or a guest’s behaviour makes it unsafe. Follow their instructions. Guests who are unsafe, or who are under the influence of alcohol or drugs, can be stopped without a refund.
                                </p>
                            </div>

                            <div className="terms-section">
                                <div className="section-header">
                                    <span className="section-num">08</span>
                                    <h2>Contact Us</h2>
                                </div>
                                <div className="terms-contact-info">
                                    <p>📍 <strong>Address:</strong> Dolphin Adventure, Beyt Dwarka, Gujarat, India</p>
                                    <p>📞 <strong>Phone:</strong> <a href="tel:+917201060500">+91 7201060500</a></p>
                                    <p>📧 <strong>Email:</strong> <a href="mailto:info@beytdwarka.com">info@beytdwarka.com</a></p>
                                </div>
                            </div>
                        </div>

                        <div className="terms-contact-cta MarginTop30px">
                            <p>Need clarification on our terms? Our team is ready to assist.</p>
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

export default TermsAndConditions;
