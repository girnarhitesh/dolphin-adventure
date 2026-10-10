import { FaFire } from "react-icons/fa";
import { GiCampingTent, GiHut, GiMeal } from "react-icons/gi";
import { MdVerifiedUser } from "react-icons/md";
import "./CampHighlights.css";

const points = [
    {
        icon: GiCampingTent,
        title: "Well Equipped Campsite",
        note: "Swiss tents and AC stays on the beach",
    },
    {
        icon: FaFire,
        title: "Bonfire Night",
        note: "DJ and garba under the stars",
        accent: true,
    },
    {
        icon: GiMeal,
        title: "Delicious Food",
        note: "Meals included with every stay",
    },
    {
        icon: GiHut,
        title: "Beach View Huts",
        note: "Private sand and sea at your door",
        accent: true,
    },
    {
        icon: MdVerifiedUser,
        title: "Safe & Secure Environment",
        note: "Trained staff on the water and camp",
    },
];

const CampHighlights = () => {
    return (
        <section className="camp-highlights" aria-label="Campsite highlights">
            <div className="wnf-container">
                <div className="camp-highlights__head">
                    <div className="camp-highlights__eyebrow">
                        <span className="camp-highlights__eyebrow-line" />
                        <span className="camp-highlights__eyebrow-text">Why stay with us</span>
                    </div>
                    <p className="camp-highlights__lead">
                        Five things every guest finds on the beach at Dolphin Adventure.
                    </p>
                </div>

                <ol className="camp-highlights__rail">
                    {points.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <li
                                key={item.title}
                                className={`camp-highlights__item${item.accent ? " camp-highlights__item--accent" : ""}`}
                            >
                                <span className="camp-highlights__step">
                                    <span className="camp-highlights__icon">
                                        <Icon size={18} />
                                    </span>
                                    <span className="camp-highlights__num">0{index + 1}</span>
                                </span>
                                <strong className="camp-highlights__title">{item.title}</strong>
                                <p className="camp-highlights__note">{item.note}</p>
                            </li>
                        );
                    })}
                </ol>
            </div>
        </section>
    );
};

export default CampHighlights;
