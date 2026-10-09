import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { useBooking } from "../../../Context/BookingContext";
import "./BookingModal.css";

const BookingModal = ({ isPrerender = false }) => {
    const { isModalOpen, closeBookingModal } = useBooking();
    const [isLoading, setIsLoading] = useState(!isPrerender);

    if (!isModalOpen) return null;

    return (
        <div className="booking-modal-overlay" onClick={closeBookingModal}>
            <div
                className="booking-modal-container"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    className="booking-modal-close"
                    onClick={closeBookingModal}
                    aria-label="Close booking modal"
                >
                    <MdClose size={24} />
                </button>

                {/* Loading Spinner */}
                {isLoading && (
                    <div className="booking-modal-loader">
                        <div className="loader-spinner" />
                        <span>Preparing your flight...</span>
                    </div>
                )}

                {/* Booking Iframe */}
                <iframe
                    src="https://okghumo.com/paragliding-with-whynotfly"
                    title="WhyNotFly Booking Panel"
                    className={`booking-modal-iframe ${isLoading ? 'hidden' : 'visible'}`}
                    onLoad={() => setIsLoading(false)}
                    frameBorder="0"
                    allowFullScreen
                />
            </div>
        </div>
    );
};

export default BookingModal;
