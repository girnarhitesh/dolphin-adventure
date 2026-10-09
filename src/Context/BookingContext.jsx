import React, { createContext, useContext, useState, useEffect } from "react";

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openBookingModal = () => setIsModalOpen(true);
    const closeBookingModal = () => setIsModalOpen(false);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isModalOpen]);

    return (
        <BookingContext.Provider
            value={{
                isModalOpen,
                openBookingModal,
                closeBookingModal,
            }}
        >
            {children}
        </BookingContext.Provider>
    );
};

export const useBooking = () => {
    const context = useContext(BookingContext);
    if (!context) {
        throw new Error("useBooking must be used within a BookingProvider");
    }
    return context;
};
