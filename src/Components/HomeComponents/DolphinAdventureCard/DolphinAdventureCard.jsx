import { MdVerified, MdAccessTime, MdArrowForward, MdPerson, MdGroups, MdBeachAccess, MdRestaurant, MdMusicNote, MdAcUnit, MdBathroom, MdDirectionsBoat, MdLocalFireDepartment } from "react-icons/md";
import Button from "../../../CommonComponents/Button/Button";
import "./DolphinAdventureCard.css";
import { useBooking } from "../../../Context/BookingContext";

const DOLPHIN_IMG = "/Images/dolphinImage.png";

const FLY_PACKAGES = [
    {
        id: "parasailing",
        badge: "Most Popular",
        badgeType: "primary",
        title: "Parasailing",
        subtitle: "Fly Above the Arabian Sea",
        duration: "5 – 8",
        durationUnit: "Minutes",
        price: "₹1,500",
        priceNote: "per person",
        description:
            "Rise high over the blue waters of Beyt Dwarka and take in the island, temple and coastline from the sky. Calm, smooth and unforgettable, perfect for first-timers too.",
        features: [
            { icon: <MdVerified size={16} />, label: "Certified Safety Harness" },
            { icon: <MdPerson size={16} />, label: "Experienced Captain" },
            { icon: <MdDirectionsBoat size={16} />, label: "Life Jacket Provided" },
        ],
        meta: [
            { label: "TIMING", value: "9:00 AM to Sunset" },
            { label: "ELIGIBILITY", value: "10 Years +" },
            { label: "WEIGHT LIMIT", value: "30 to 100 kg" },
        ],
        bg: "https://images.unsplash.com/photo-1632904074880-b77f02b6d01e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: "jet-ski",
        badge: "Thrill Pick",
        badgeType: "accent",
        title: "Jet Ski Ride",
        subtitle: "Speed Meets the Sea",
        duration: "5 – 7",
        durationUnit: "Minutes",
        price: "₹500",
        priceNote: "per person",
        description:
            "Feel the rush as you race across the waves on a powerful jet ski with a trained rider. Short, fast and full of splashes.",
        features: [
            { icon: <MdPerson size={16} />, label: "Trained Rider" },
            { icon: <MdDirectionsBoat size={16} />, label: "Life Jacket Provided" },
            { icon: <MdBeachAccess size={16} />, label: "Beach Launch" },
        ],
        meta: [
            { label: "TIMING", value: "9:00 AM to Sunset" },
            { label: "ELIGIBILITY", value: "12 Years +" },
            { label: "WEIGHT LIMIT", value: "Up to 100 kg" },
        ],
        bg: "https://images.unsplash.com/photo-1628324814404-5e123cd10506?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: "speed-boat",
        badge: "Family Favourite",
        badgeType: "accent",
        title: "Speed Boat",
        subtitle: "Cruise the Coast in Style",
        duration: "10 – 15",
        durationUnit: "Minutes",
        price: "₹200",
        priceNote: "per person",
        description:
            "Zip along the Beyt Dwarka coastline on a speed boat with sea breeze and open views all around. Great for groups and families.",
        features: [
            { icon: <MdPerson size={16} />, label: "Experienced Captain" },
            { icon: <MdDirectionsBoat size={16} />, label: "Life Jacket Provided" },
            { icon: <MdGroups size={16} />, label: "Group Friendly" },
        ],
        meta: [
            { label: "TIMING", value: "9:00 AM to Sunset" },
            { label: "ELIGIBILITY", value: "5 Years +" },
            { label: "WEIGHT LIMIT", value: "No Limit" },
        ],
        bg: "https://images.unsplash.com/photo-1621932945904-c5be9be992d8?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: "banana-ride",
        badge: "Group Fun",
        badgeType: "accent",
        title: "Banana Ride",
        subtitle: "Hold On and Laugh Out Loud",
        duration: "8 – 10",
        durationUnit: "Minutes",
        price: "₹200",
        priceNote: "per person",
        description:
            "Hop on the banana boat with friends as it gets pulled across the sea, and try your best not to fall in. Pure fun, guaranteed laughs.",
        features: [
            { icon: <MdDirectionsBoat size={16} />, label: "Life Jacket Provided" },
            { icon: <MdGroups size={16} />, label: "Group Ride" },
            { icon: <MdPerson size={16} />, label: "Trained Staff" },
        ],
        meta: [
            { label: "TIMING", value: "9:00 AM to Sunset" },
            { label: "ELIGIBILITY", value: "8 Years +" },
            { label: "WEIGHT LIMIT", value: "Up to 100 kg" },
        ],
        bg: "https://images.unsplash.com/photo-1755865984882-72738b754c39?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: "sofa-ride",
        badge: "Crowd Pleaser",
        badgeType: "accent",
        title: "Sofa Ride",
        subtitle: "Sit Back and Bounce",
        duration: "8 – 10",
        durationUnit: "Minutes",
        price: "₹200",
        priceNote: "per person",
        description:
            "Relax on an inflatable sofa as the boat tows you across the waves with every bump and splash. Easy, exciting and great for all ages.",
        features: [
            { icon: <MdDirectionsBoat size={16} />, label: "Life Jacket Provided" },
            { icon: <MdGroups size={16} />, label: "Up to 3 Riders" },
            { icon: <MdPerson size={16} />, label: "Trained Staff" },
        ],
        meta: [
            { label: "TIMING", value: "9:00 AM to Sunset" },
            { label: "ELIGIBILITY", value: "8 Years +" },
            { label: "WEIGHT LIMIT", value: "Up to 100 kg" },
        ],
        bg: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/15/54/ed/ed.jpg",
    },
    {
        id: "atv-ride",
        badge: "Off-Road",
        badgeType: "accent",
        title: "ATV Ride",
        subtitle: "Rule the Sand",
        duration: "10",
        durationUnit: "Minutes",
        price: "₹200",
        priceNote: "per person",
        description:
            "Take control of an all-terrain quad bike and ride across the sandy beach at your own pace. A must for adventure lovers.",
        features: [
            { icon: <MdVerified size={16} />, label: "Helmet Provided" },
            { icon: <MdBeachAccess size={16} />, label: "Guided Track" },
            { icon: <MdBeachAccess size={16} />, label: "Beach Riding" },
        ],
        meta: [
            { label: "TIMING", value: "9:00 AM to Sunset" },
            { label: "ELIGIBILITY", value: "12 Years +" },
            { label: "WEIGHT LIMIT", value: "Up to 110 kg" },
        ],
        bg: "https://images.unsplash.com/photo-1616310482838-faff673859e6?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: "camping-bonfire",
        badge: "Evening Special",
        badgeType: "accent",
        title: "Camping Bonfire",
        subtitle: "Fire, Music and Starry Nights",
        duration: "2 – 3",
        durationUnit: "Hours",
        price: "Included",
        priceNote: "with camp stay",
        description:
            "End your day around a warm bonfire on the beach with DJ, garba and good company under the stars. The highlight of every camp stay.",
        features: [
            { icon: <MdMusicNote size={16} />, label: "DJ and Garba Night" },
            { icon: <MdBeachAccess size={16} />, label: "Beach Seating" },
            { icon: <MdRestaurant size={16} />, label: "Dinner Before Bonfire" },
        ],
        meta: [
            { label: "TIMING", value: "8:00 PM onwards" },
            { label: "ELIGIBILITY", value: "All Ages" },
            { label: "WEIGHT LIMIT", value: "Not Applicable" },
        ],
        bg: "https://images.unsplash.com/photo-1596326270763-87f26e0f9225?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: "beach-camping",
        badge: "Best Value",
        badgeType: "primary",
        title: "Beach Camping",
        subtitle: "Wake Up to the Waves",
        duration: "1 Night",
        durationUnit: "2 Days",
        price: "Starts ₹2,999",
        priceNote: "per person",
        description:
            "Stay in Swiss tents or AC containers on Beyt Dwarka's only campsite with on-site water sports. Includes meals, bonfire, sightseeing and dolphin exploration boat ride.",
        features: [
            { icon: <MdRestaurant size={16} />, label: "2 Breakfasts, Lunch, Dinner and High Tea" },
            { icon: <MdLocalFireDepartment size={16} />, label: "Bonfire and DJ Night" },
            { icon: <MdDirectionsBoat size={16} />, label: "Dolphin Exploration" },
        ],
        meta: [
            { label: "TIMING", value: "Check-in 10:00 AM, Check-out 9:00 AM" },
            { label: "ELIGIBILITY", value: "All Ages" },
            { label: "WEIGHT LIMIT", value: "Not Applicable" },
        ],
        bg: "https://images.unsplash.com/photo-1678720021138-29ad07dd56ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: "beach-stay",
        badge: "Quick Escape",
        badgeType: "accent",
        title: "Beach Stay",
        subtitle: "One Night by the Sea",
        duration: "1",
        durationUnit: "Night",
        price: "Starts ₹1,199",
        priceNote: "per person",
        description:
            "A simple overnight stay on the private beach for travellers short on time. Arrive in the evening, enjoy dinner and a calm night, leave after breakfast.",
        features: [
            { icon: <MdRestaurant size={16} />, label: "Dinner and Breakfast" },
            { icon: <MdBathroom size={16} />, label: "Attached Washroom" },
            { icon: <MdAcUnit size={16} />, label: "AC Options Available" },
        ],
        meta: [
            { label: "TIMING", value: "Check-in 5:00 PM, Check-out 8:30 AM" },
            { label: "ELIGIBILITY", value: "All Ages" },
            { label: "WEIGHT LIMIT", value: "Not Applicable" },
        ],
        bg: "https://images.unsplash.com/photo-1708149609521-d8d450aa44aa?q=80&w=1481&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                                    <span className="fly-card__price-note">{pkg.priceNote}</span>
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