import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import Button from "../../../CommonComponents/Button/Button";
import { useBooking } from "../../../Context/BookingContext";

const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);
    const [visible, setVisible] = useState(true);
    const [lastY, setLastY] = useState(0);
    const { openBookingModal } = useBooking();

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;

            // Shrink the bar after 200px of scroll
            setScrolled(currentY > 200);

            // Hide on scroll down, show on scroll up (min 80px from top)
            if (currentY > 80) {
                setVisible(currentY < lastY);
            } else {
                setVisible(true);
            }

            setLastY(currentY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastY]);

    return (
        <header
            className={`nav-header${scrolled ? " nav-header--scrolled" : ""}${visible ? "" : " nav-header--hidden"}`}
            role="banner"
        >
            <div className="wnf-container nav-inner">
                {/* ── Logo ── */}
                <Link to="/" className="nav-logo" aria-label="Dolphin Adventure Home">
                    <img
                        src="/Images/dolphin-adventure-logo.png"
                        alt="Dolphin Adventure"
                        className="nav-logo__img"
                    />
                </Link>

                {/* ── Book Now CTA ── */}
                <Button
                    variant="primary"
                    className="nav-book-btn"
                    onClick={openBookingModal}
                >
                    Book Your Splash
                </Button>
            </div>
        </header>
    );
};

export default Navigation;