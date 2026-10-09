import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./LiabilityWaiver.css";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import FloatingCallButton from "../FloatingCallButton/FloatingCallButton";
import Button from "../../../CommonComponents/Button/Button";
import { FaPhone } from "react-icons/fa";

const LiabilityWaiver = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="waiver-page">
            <Navigation />

            <section className="waiver-hero">
                <div className="waiver-hero-overlay"></div>
                <div className="wnf-container">
                    <div className="waiver-hero-content">
                        <h1>Liability Waiver</h1>
                        <p className="last-updated">Last Updated: 10 Oct 2026</p>
                    </div>
                </div>
            </section>

            <section className="waiver-content-section">
                <div className="wnf-container">
                    <div className="waiver-card">
                        <div className="waiver-intro">
                            <p>
                                By joining an activity or stay with <strong>Dolphin Adventure</strong> at Beyt Dwarka, you accept the risks of being on the water, in the air, and on the beach, and you agree to follow our staff. This waiver sits with our <Link to="/terms-and-conditions">Terms & Conditions</Link>.
                            </p>
                        </div>

                        <div className="waiver-grid">
                            <div className="waiver-section">
                                <div className="section-header">
                                    <span className="section-num">01</span>
                                    <h2>Activities Covered</h2>
                                </div>
                                <p>Each activity has its own risks. You take part knowing that, including:</p>
                                <ul className="waiver-list">
                                    <li><strong>Parasailing</strong> — wind, height, and landing in the water. Ages 10 and above, 30 to 100 kg. Harness stays on.</li>
                                    <li><strong>Jet ski</strong> — speed, waves, and spray. Ages 12 and above, up to 100 kg. A trained rider is with you.</li>
                                    <li><strong>Speed boat and dolphin exploration</strong> — swell, spray, and a moving deck. Speed boat is ages 5 and above.</li>
                                    <li><strong>Banana ride and sofa ride</strong> — falling into the sea. Ages 8 and above, up to 100 kg. Sofa ride is up to 3 riders.</li>
                                    <li><strong>ATV</strong> — sand, tipping, and other riders. Ages 12 and above, up to 110 kg. Helmet stays on, and you stay on the guided track.</li>
                                    <li><strong>Bonfire, Beach Camping, and Beach Stay</strong> — open fire, night beach, and sea weather. Children stay with their family.</li>
                                </ul>
                            </div>

                            <div className="waiver-section">
                                <div className="section-header">
                                    <span className="section-num">02</span>
                                    <h2>Health & Fitness</h2>
                                </div>
                                <ul className="waiver-list">
                                    <li>You are well enough for the activity you booked, and you have told us about any condition that could affect you on the water, in the air, or on an ATV.</li>
                                    <li>Guests under 18 are booked and accompanied by a parent or guardian, who accepts this waiver for them.</li>
                                    <li>A life jacket is worn for every water activity, including parasailing, jet ski, speed boat, banana ride, sofa ride, and dolphin exploration.</li>
                                    <li>Guests outside the age or weight limit for an activity cannot take part.</li>
                                </ul>
                            </div>

                            <div className="waiver-section">
                                <div className="section-header">
                                    <span className="section-num">03</span>
                                    <h2>What You Accept</h2>
                                </div>
                                <p>
                                    You join voluntarily. You will not hold Dolphin Adventure, its captains, or its campsite staff responsible for injury, loss, or damage that comes from the ordinary risks of these activities, the sea, or the weather, where you were briefed and the safety kit was provided.
                                </p>
                                <p>
                                    This does not remove our duty to run the activity with reasonable care. A ride stopped because a guest ignores instructions, or is under the influence of alcohol or drugs, is not refunded.
                                </p>
                            </div>

                            <div className="waiver-section">
                                <div className="section-header">
                                    <span className="section-num">04</span>
                                    <h2>Safety on the Day</h2>
                                </div>
                                <ul className="waiver-list">
                                    <li>Water sports run from 9:00 AM until sunset, and only when the sea allows.</li>
                                    <li>Staff give a briefing before each ride and can shorten or stop it.</li>
                                    <li>The camping bonfire starts around 8:00 PM and is included with a camp stay.</li>
                                    <li>Beach Camping check-in is 10:00 AM and check-out is 9:00 AM. Beach Stay check-in is 5:00 PM and check-out is 8:30 AM.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="waiver-acknowledgment MarginTop30px">
                            <p>
                                By booking, or by starting an activity, you confirm that you have read this waiver and the age, weight, and timing rules for the activity or stay you chose.
                            </p>
                        </div>

                        <div className="waiver-contact-cta MarginTop30px">
                            <p>
                                Questions before you book? Call <a href="tel:+917201060500">+91 7201060500</a> or write to <a href="mailto:info@beytdwarka.com">info@beytdwarka.com</a>.
                            </p>
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

export default LiabilityWaiver;
