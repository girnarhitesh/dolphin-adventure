import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards } from "swiper/modules";
import { MdPhone, MdStar, MdFormatQuote } from "react-icons/md";
import Button from "../../../CommonComponents/Button/Button";
import reviewsData from "./reviews.json";
import "swiper/css";
import "swiper/css/effect-cards";
import "./Reviews.css";

const PARACHUTE_IMG = "/Images/dolphine-png.png";

const StarRating = ({ count }) => (
    <div className="review-card__stars" aria-label={`${count} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
            <MdStar
                key={i}
                size={16}
                className={i < count ? "star--filled" : "star--empty"}
            />
        ))}
    </div>
);

const Reviews = () => {
    return (
        <section className="reviews-section" id="reviews" aria-label="Client Reviews">
            <div className="wnf-container reviews-layout">

                {/* ── LEFT: Content ────────────────────────── */}
                <div className="reviews-content">
                    <div className="reviews-eyebrow">
                        <span className="reviews-eyebrow__line" />
                        <span className="reviews-eyebrow__text">Client Experience</span>
                    </div>

                    <h2 className="reviews-heading">
                        Real Stories From<br />
                        Campers Who Chose<br />
                        <span className="reviews-heading--accent">The Beach Life!</span>
                    </h2>
                    <br />

                    <p className="reviews-desc">
                        Beyt Dwarka is not just a getaway, it's a blend of sea, sand and pure joy. Families, school groups and corporate teams come from across Gujarat and India to stay on our private beach, and their stories speak for themselves. Whether it's a first ride on the banana boat, a bonfire night under the stars or seeing dolphins up close on the boat ride, every stay with us turns into a memory worth sharing.
                    </p>

                    {/* <div className="reviews-trust">
                        <div className="reviews-trust__item">
                            <span className="reviews-trust__value">500+</span>
                            <span className="reviews-trust__label">Happy Flyers</span>
                        </div>
                        <div className="reviews-trust__divider" />
                        <div className="reviews-trust__item">
                            <span className="reviews-trust__value">4.9★</span>
                            <span className="reviews-trust__label">Average Rating</span>
                        </div>
                        <div className="reviews-trust__divider" />
                        <div className="reviews-trust__item">
                            <span className="reviews-trust__value">100%</span>
                            <span className="reviews-trust__label">Would Recommend</span>
                        </div>
                    </div> */}

                    <div>
                        <Button href="tel:+916397997489" variant="primary">
                        <MdPhone size={16} />
                        Call Now
                    </Button>   
                    </div>
                </div>

                {/* ── RIGHT: Swiper Cards ───────────────────── */}
                <div className="reviews-slider-wrap">
                    <Swiper
                        modules={[Autoplay, EffectCards]}
                        effect="cards"
                        grabCursor={true}
                        centeredSlides={true}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        loop={true}
                        className="reviews-swiper"
                    >
                        {reviewsData.map((review) => (
                            <SwiperSlide key={review.id} className="reviews-slide">
                                <div className="review-card">

                                    {/* Watermark dolphin */}
                                    <div className="review-card__parachute-wrap">
                                        <img
                                            src={PARACHUTE_IMG}
                                            alt=""
                                            aria-hidden="true"
                                            className="review-card__parachute"
                                            width="200"
                                            height="200"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    </div>

                                    {/* Quote icon */}
                                    <div className="review-card__quote-icon">
                                        <MdFormatQuote size={36} />
                                    </div>

                                    {/* Stars */}
                                    <StarRating count={review.rating} />

                                    {/* Tag */}
                                    {review.tag && (
                                        <span className="review-card__tag">{review.tag}</span>
                                    )}

                                    {/* Review text */}
                                    <p className="review-card__text">"{review.review}"</p>

                                    {/* Reviewer */}
                                    <div className="review-card__author">
                                        <div className="review-card__avatar">
                                            {review.initials}
                                        </div>
                                        <div className="review-card__author-info">
                                            <strong className="review-card__name">{review.name}</strong>
                                            {review.city && (
                                                <span className="review-card__city">{review.city}</span>
                                            )}
                                        </div>
                                        {review.date && (
                                            <span className="review-card__date">{review.date}</span>
                                        )}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Decorative orb blobs */}
                    <div className="reviews-orb reviews-orb--1" />
                    <div className="reviews-orb reviews-orb--2" />
                </div>

            </div>
        </section>
    );
};

export default Reviews;