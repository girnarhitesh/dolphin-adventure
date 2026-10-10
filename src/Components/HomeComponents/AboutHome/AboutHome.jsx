import React, { useState, useEffect, useRef } from "react";
import {
    MdParagliding,
    MdVerified,
    MdPeople,
} from "react-icons/md";
import { FaMountain } from "react-icons/fa";
import { Image } from "antd";
import Button from "../../../CommonComponents/Button/Button";
import { galleryData } from "./galleryData";
import "./AboutHome.css";
import { useBooking } from "../../../Context/BookingContext";

/* ─── Counter Reel Component ───────────────── */
const CounterReel = ({ value }) => {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const digitsOnly = value.replace(/\D/g, "");
    const characters = value.split("");

    let digitCount = 0;

    return (
        <span className="counter-reel" ref={containerRef}>
            {characters.map((char, index) => {
                const isDigit = /\d/.test(char);
                if (!isDigit) {
                    return <span key={index} className="reel-symbol">{char}</span>;
                }

                const digit = parseInt(char, 10);
                const currentDigitIndex = digitCount;
                digitCount++;

                const depthFromRight = digitsOnly.length - 1 - currentDigitIndex;
                const rotations = 2 + (depthFromRight * 1);

                const reelDigits = [];
                for (let r = 0; r <= rotations; r++) {
                    const end = (r === rotations) ? digit : 9;
                    for (let i = 0; i <= end; i++) {
                        reelDigits.push(i);
                    }
                }

                const totalItems = reelDigits.length;

                return (
                    <span key={index} className="reel-container">
                        <span
                            className="reel-column"
                            style={{
                                transform: isVisible ? `translateY(-${((totalItems - 1) / totalItems) * 100}%)` : "translateY(0%)",
                                transitionDuration: `${2 + (depthFromRight * 0.2)}s`,
                                transitionDelay: `${currentDigitIndex * 0.1}s`
                            }}
                        >
                            {reelDigits.map((n, i) => (
                                <span key={i} className="reel-num">
                                    {n}
                                </span>
                            ))}
                        </span>
                    </span>
                );
            })}
        </span>
    );
};

const AboutHome = () => {
    const { openBookingModal } = useBooking();

    return (
        <section className="about-section" id="about" aria-label="About Us">
            <div className="wnf-container">

                {/* ── TOP: Masonry Gallery ────────────────── */}
                <div className="about-gallery-masonry">
                    <Image.PreviewGroup>
                        {galleryData.map((item) => (
                            <div key={item.id} className={`gallery-item gallery-item--${item.span}`}>
                                {item.type === "video" ? (
                                    <div className="gallery-video-wrapper">
                                        <video
                                            src={item.src}
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="gallery-video"
                                        />
                                        {/* <div className="video-overlay-tag">Video</div> */}
                                    </div>
                                ) : (
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        className="gallery-img"
                                        imgProps={{
                                            loading: "lazy",
                                            "aria-label": item.alt
                                        }}
                                        placeholder={
                                            <div className="gallery-img-placeholder" />
                                        }
                                    />
                                )}
                            </div>
                        ))}
                    </Image.PreviewGroup>

                </div>

                {/* ── BOTTOM: Content ─────────────────────── */}
                <div className="about-content-bottom MarginTop50px">
                    <div className="about-content-grid">
                        <div className="about-text-content">
                            {/* Section eyebrow */}
                            <div className="about-eyebrow">
                                <span className="about-eyebrow__line" />
                                <span className="about-eyebrow__text">Who We Are</span>
                            </div>

                            {/* Heading */}
                            <h2 className="MarginBottom20px">
                                Beyt Dwarka's Only Campsite<br />
                                <span className="about-heading--accent">With On-Site Water Sports</span>
                            </h2>

                            {/* Description */}
                            <p className="MarginBottom20px">
                                Dolphin Adventure is the only campsite in <span className="about-text-highlight">Beyt Dwarka</span> with water sports right on the beach. Set on a private stretch of sand on the <span className="about-text-highlight">sacred island of Lord Krishna</span>, we bring together comfortable Swiss tent and AC container stays, thrilling rides from <span className="about-text-highlight">parasailing</span> to <span className="about-text-highlight">jet ski</span>, <span className="about-text-highlight">bonfire and garba nights</span>, and <span className="about-text-highlight">dolphin exploration</span> by boat, all in a safe and secure environment.
                            </p>

                            {/* Stat Badge (Moved from Gallery)
                            <div className="about-gallery-stat-inline" style={{
                                 margin:"0px"
                            }}>
                                <div className="about-gallery__stat-circle">
                                    <MdParagliding size={24} />
                                </div>
                                <div className="about-gallery__stat-info">
                                    <strong className="about-gallery__stat-value">
                                        <CounterReel value="6000" />
                                        <span className="about-gallery__stat-plus">+</span>
                                    </strong>
                                    <span className="about-gallery__stat-label text-dark-mode-compat">Successfully Completed In 1 Year</span>
                                </div>
                            </div>
                            */}
                        </div>

                        <div className="about-highlights-wrapper">
                            {/* Highlight pills */}
                            <ul className="about-highlights MarginBottom30px" aria-label="Key highlights">
                                {["Only Campsite with Water Sports", "Private Beach Camping", "Dolphin Exploration", "Stunning Sunset Views", "Bonfire & Garba Nights", "Safe & Secure Environment"].map(
                                    (item) => (
                                        <li key={item} className="about-highlight-pill">
                                            <MdVerified size={14} />
                                            {item}
                                        </li>
                                    )
                                )}
                            </ul>

                            {/* CTA */}
                            <div className="about-cta">
                                <Button
                                    onClick={openBookingModal}
                                    variant="primary"
                                >
                                    Book Your Splash
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutHome;