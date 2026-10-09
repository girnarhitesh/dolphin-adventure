import { MdVideocam, MdVerified, MdAccessTime, MdArrowForward, MdDirectionsCar, MdTrendingUp } from "react-icons/md";
import { FaMountain, FaArrowRight, FaCarSide } from "react-icons/fa";
import Button from "../../../CommonComponents/Button/Button";
import "./DolphinAdventureCard.css";
import { useBooking } from "../../../Context/BookingContext";

const DOLPHIN_IMG = "/Images/dolphinImage.png";

const FLY_PACKAGES = [
    {
        id: "classic",
        badge: "Most Popular",
        badgeType: "primary",
        title: "Classic Flight",
        subtitle: "Teaser Flight Experience",
        duration: "7 – 11",
        durationUnit: "Minutes",
        price: "₹3,800",
        description:
            "Short, thrilling, and full of fun! Perfect for beginners, The Teaser Flight gives you an exciting paragliding experience. Feel the thrill of flying as you glide through the sky and enjoy the fresh air. Want more adventure? Ask your pilot for stunts! (Additional charges apply)",
        features: [
            { icon: <MdVideocam size={16} />, label: "Complimentary GoPro Video" },
            { icon: <FaCarSide size={16} />, label: "Gypsy Jungle Safari to Takeoff" },
            { icon: <MdVerified size={16} />, label: "Certified Safety Gear" },
        ],
        meta: [
            { label: "TIMING", value: "8:30 am – Sunset" },
            { label: "ELIGIBILITY", value: "12 Years +" },
            { label: "WEIGHT LIMIT", value: "30 – 95 kg" },
        ],
        bg: "https://images.unsplash.com/photo-1592208128295-5aaa34f1d72b?q=80&w=2200&auto=format&fit=crop",
    },
    {
        id: "long",
        badge: "Best Experience",
        badgeType: "accent",
        title: "Customised Long Flight",
        subtitle: "Explorer Flight Experience",
        duration: "16 – 25",
        durationUnit: "Minutes",
        price: "₹5,800",
        description:
            "Relax, explore, and take in the beauty. If you want more time in the air, The Explorer Flight is for you! Glide for 20 to 30 minutes, soaking in breathtaking views as you roam across the valleys. It’s a peaceful, immersive experience—perfect for those who want to enjoy the scenery.",
        features: [
            { icon: <MdVideocam size={16} />, label: "Complimentary GoPro Video" },
            { icon: <FaCarSide size={16} />, label: "Gypsy Jungle Safari through Forest" },
            { icon: <MdVerified size={16} />, label: "Certified Safety Gear" },
        ],
        meta: [
            { label: "TIMING", value: "11:30 am – 3:30 pm" },
            { label: "ELIGIBILITY", value: "12 Years +" },
            { label: "WEIGHT LIMIT", value: "30 – 95 kg" },
        ],
        bg: "https://images.unsplash.com/photo-1601893725892-358c5490ea65?q=80&w=2200&auto=format&fit=crop",
    },
];

const DolphinAdventureCard = () => {
    const { openBookingModal } = useBooking();
    return (
        <section className="fly-section" id="packages" aria-label="Flight Packages">
            {/* Section header */}
            <div className="wnf-container fly-section__header">
                <div className="fly-section__eyebrow">
                    <span className="fly-section__eyebrow-line" />
                    <span className="fly-section__eyebrow-text">Choose Your Adventure</span>
                </div>
                <h2 className="fly-section__title MarginBottom50px">
                    Two Ways to Fly.<br/>
                    <span className="fly-section__title--accent">One Unforgettable Sky.</span>
                </h2>
                <br />
            </div>

            
            <div className="wnf-container fly-cards-grid">
                {FLY_PACKAGES.map((pkg) => (
                    <article
                        key={pkg.id}
                        className="fly-card"
                        style={{ "--card-bg": `url('${pkg.bg}')` }}
                        aria-label={pkg.title}
                    >
                        {/* Cinematic bg overlay */}
                        <div className="fly-card__overlay" />

                        <div className="fly-card__visual">
                            <div className="fly-card__glider-wrap">
                                <img
                                    src={DOLPHIN_IMG}
                                    alt="Dolphin"
                                    width="360"
                                    height="360"
                                    loading="lazy"
                                    decoding="async"
                                    className="fly-card__glider-img"
                                />
                                {/* Cloud glow behind */}
                                <div className="fly-card__glider-glow" />
                            </div>
                        </div>

                        {/* RIGHT — Content */}
                        <div className="fly-card__content">
                            {/* Badge */}
                            <span className={`fly-card__badge fly-card__badge--${pkg.badgeType}`}>
                                <MdVerified size={12} /> {pkg.badge}
                            </span>

                            {/* Title row with inline duration tag */}
                            <div className="fly-card__title-row">
                                <h2 className="fly-card__title">{pkg.title}</h2>
                                <div className="fly-card__duration-tag">
                                    <MdAccessTime size={14} />
                                    <span className="fly-card__duration-time">{pkg.duration}</span>
                                    <span className="fly-card__duration-unit">{pkg.durationUnit}</span>
                                </div>
                            </div>

                            <p className="fly-card__subtitle MarginBottom10px">{pkg.subtitle}</p>

                            {/* Description */}
                            <p className="fly-card__desc">{pkg.description}</p>

                            {/* Meta row */}
                            <div className="fly-card__meta">
                                {pkg.meta.map((m) => (
                                    <div key={m.label} className="fly-card__meta-item">
                                        <span className="fly-card__meta-label">{m.label}</span>
                                        <span className="fly-card__meta-value">{m.value}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Features */}
                            <ul className="fly-card__features MarginBottom10px MarginBottom10px">
                                {pkg.features.map((f, i) => (
                                    <li key={i} className="fly-card__feature">
                                        <span className="fly-card__feature-icon">{f.icon}</span>
                                        {f.label}
                                    </li>
                                ))}
                            </ul>

                            {/* Price + CTA */}
                            <div className="fly-card__footer">
                                <div className="fly-card__price">
                                    <span className="fly-card__price-value">{pkg.price}</span>
                                    <span className="fly-card__price-note">per person</span>
                                </div>
                                <Button
                                    onClick={openBookingModal}
                                    variant="primary"
                                >
                                    Book Your Splash <MdArrowForward size={14} />
                                </Button>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default DolphinAdventureCard;