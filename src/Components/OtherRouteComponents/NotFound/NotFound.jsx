import React from "react";
import { MdWest } from "react-icons/md";
import Button from "../../../CommonComponents/Button/Button";
import "./NotFound.css";
import { useBooking } from "../../../Context/BookingContext";

const NotFound = () => {
    const { openBookingModal } = useBooking();
    return (
        <main className="not-found">
            {/* Animated background elements */}
            <div className="not-found__ambient">
                <div className="not-found__orb not-found__orb--1" />
                <div className="not-found__orb not-found__orb--2" />
            </div>

            <div className="wnf-container not-found__layout">
                {/* Visual side: Large 404 watermark */}
                <div className="not-found__watermark">
                    <span className="not-found__digit">4</span>
                    <div className="not-found__glider-box">
                        <img
                            src="https://bucketlistt-web.s3.ap-south-1.amazonaws.com/uploads/images/WhyNotFlyParachuteImage.png"
                            alt="Lost Paraglider"
                            className="not-found__glider"
                        />
                        <span className="not-found__digit">0</span>
                    </div>
                    <span className="not-found__digit">4</span>
                </div>

                {/* Content side */}
                <div className="not-found__content">
                    <div className="not-found__eyebrow">
                        <span className="not-found__eyebrow-line" />
                        <span className="not-found__eyebrow-text">Wrong Heading?</span>
                    </div>

                    <h1 className="not-found__title">
                        Lost in the <span className="not-found__title--accent">Infinite Clouds</span>
                    </h1>

                    <p className="not-found__desc">
                        The altitude is high, but the page you're looking for seems to have
                        drifted off course. Let's get you back to the safe zone.
                    </p>

                    <div className="not-found__cta">
                        <Button to="/" variant="outline">
                            <MdWest size={18} />
                            Fly Back Home
                        </Button>
                        <Button onClick={openBookingModal} variant="primary">
                            Book Your Splash
                        </Button>
                    </div>
                </div>
            </div>

            {/* Drifting clouds watermark */}
            <div className="not-found__cloud-texture" />
        </main>
    );
};

export default NotFound;
