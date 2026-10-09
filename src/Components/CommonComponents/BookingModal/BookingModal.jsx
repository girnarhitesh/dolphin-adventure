import { MdClose } from "react-icons/md";
import { useBooking } from "../../../Context/BookingContext";
import "./BookingModal.css";

const BookingModal = () => {
    const { isModalOpen, closeBookingModal } = useBooking();

    if (!isModalOpen) return null;

    return (
        <div className="booking-modal-overlay" onClick={closeBookingModal}>
            <div
                className="booking-modal-container"
                role="dialog"
                aria-modal="true"
                aria-labelledby="booking-modal-title"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="booking-modal-close"
                    onClick={closeBookingModal}
                    aria-label="Close booking modal"
                >
                    <MdClose size={22} />
                </button>

                <div className="booking-modal-notice">
                    <p className="booking-modal-notice__eyebrow">Booking</p>
                    <h2 id="booking-modal-title">Under working</h2>
                    <p>This will be updated soon.</p>
                    <button
                        type="button"
                        className="booking-modal-notice__ok"
                        onClick={closeBookingModal}
                    >
                        Okay
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
