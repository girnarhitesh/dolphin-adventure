import React from "react";
import { FaFire } from "react-icons/fa";
import { GiCampingTent, GiHut, GiMeal } from "react-icons/gi";
import { MdVerifiedUser } from "react-icons/md";
import Button from "../../../CommonComponents/Button/Button";
import "./HeroSliderAnimation.css";
import { useBooking } from "../../../Context/BookingContext";

const highlights = [
    { icon: GiCampingTent, lines: ["Well Equipped", "Campsite"] },
    { icon: FaFire, lines: ["Bonfire", "Night"], accent: true },
    { icon: GiMeal, lines: ["Delicious", "Food"] },
    { icon: GiHut, lines: ["Beach View", "Huts"], accent: true },
    { icon: MdVerifiedUser, lines: ["Safe & Secure", "Environment"] },
];

const slides = [
    {
        id: 1,
        image:
            "https://images.unsplash.com/photo-1592208128295-5aaa34f1d72b?q=80&w=2670&auto=format&fit=crop",
        location: "Beyt Dwarka, Gujarat",
        eyebrow: "Dolphin Adventure",
        tagline: "Fun, Adventure &\nLasting Memories",
        sub: "Dive into exciting adventures filled with fun, thrilling experiences, and unforgettable moments. Create lasting memories while discovering new experiences with Dolphin Adventure.",
    },
];

const HeroSliderAnimation = () => {
    const { openBookingModal } = useBooking();
    const current = slides[0];

    return (
        <section className="hero-section" aria-label="Hero">
            {/* Background video */}
            <div className="hero-slides">
                <video
                    className="hero-bg-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    aria-hidden="true"
                >
                    <source src="/Images/BackgroundVideo.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Overlay */}
            <div className="hero-overlay" />

            {/* Floating accent orbs */}
            <div className="hero-orb hero-orb--1" />
            <div className="hero-orb hero-orb--2" />

            {/* Content & UI Layer — Constrained by global container */}
            <div className="wnf-container hero-layout-container">
                {/* Text Content */}
                <div className="hero-content-wrapper">
                    <div className="hero-content hero-content--enter">
                        {/* Theme Badge (previously location) */}
                        <div className="hero-badge">
                            <span className="hero-badge__icon">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                            </span>
                            <span>{current.eyebrow}</span>
                        </div>

                        {/* Heading */}
                        <h1 className="hero-heading">
                            {current.tagline.split("\n").map((line, i) => (
                                <span key={i} className="hero-heading__line">
                                    {line}
                                    {i === 0 && <span className="hero-heading__arc" />}
                                </span>
                            ))}
                        </h1>

                        {/* Sub-text */}
                        <p className="hero-subtext WhiteColor">{current.sub}</p>

                        {/* CTA Buttons */}
                        <div className="hero-ctas MarginTop20px MarginBottom20px">
                            <Button
                                onClick={openBookingModal}
                                variant="primary"
                                icon={
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                        <line x1="16" y1="2" x2="16" y2="6" />
                                        <line x1="8" y1="2" x2="8" y2="6" />
                                        <line x1="3" y1="10" x2="21" y2="10" />
                                    </svg>
                                }
                            >
                                Book Your Splash
                            </Button>

                            {/* <Button
                                href="#packages"
                                variant="outline"
                                icon={
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="9 18 15 12 9 6" />
                                    </svg>
                                }
                            >
                                Explore Packages
                            </Button> */}
                        </div>

                        <ul className="hero-highlights" aria-label="What we provide">
                            {highlights.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <li key={item.lines.join("-")} className="hero-highlight">
                                        {index > 0 && <span className="hero-highlight__divider" aria-hidden="true" />}
                                        <span className={`hero-highlight__icon${item.accent ? " hero-highlight__icon--accent" : ""}`}>
                                            <Icon size={16} />
                                        </span>
                                        <span className="hero-highlight__label">
                                            {item.lines[0]}
                                            <br />
                                            {item.lines[1]}
                                        </span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>

                {/* ── Right Side Panel: Location + Controls ── */}
                <div className="hero-right-panel">

                    {/* Location Animation */}
                    <div className="hero-location-anim" aria-label="Office Location">
                        {/* Dolphin image */}
                        <div className="hero-loc-glider">
                            <img
                                src="/Images/dolphinImage.png"
                                alt="Dolphin"
                                className="hero-loc-glider__img"
                            />
                            {/* Wind trail lines */}
                            <div className="hero-loc-glider__trail">
                                <span /><span /><span />
                            </div>
                        </div>

                        {/* Animated string/thread */}
                        <div className="hero-loc-thread">
                            <svg width="2" height="80" viewBox="0 0 2 80" fill="none" className="hero-loc-thread__svg">
                                <line x1="1" y1="0" x2="1" y2="80"
                                    stroke="rgba(255,255,255,0.4)"
                                    strokeWidth="1.5"
                                    strokeDasharray="4 5"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>

                        {/* Location pin + text */}
                        <div className="hero-loc-pin">
                            <div className="hero-loc-pin__pulse" />
                            <div className="hero-loc-pin__icon">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                </svg>
                            </div>
                            <div className="hero-loc-pin__label">
                                <span className="hero-loc-pin__city">Beyt Dwarka</span>
                                <span className="hero-loc-pin__region">Gujarat, IN</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll hint */}
            <div className="hero-scroll-hint" aria-hidden="true">
                <span>Scroll</span>
                <div className="hero-scroll-line">
                    <div className="hero-scroll-line__inner" />
                </div>
            </div>
        </section>
    );
};

export default HeroSliderAnimation;