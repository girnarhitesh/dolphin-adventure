import React from "react";
import HeroSliderAnimation from "../HeroSliderAnimation/HeroSliderAnimation";
import CampHighlights from "../CampHighlights/CampHighlights";
import AboutHome from "../AboutHome/AboutHome";
import DolphinAdventureCard from "../DolphinAdventureCard/DolphinAdventureCard";
import Reviews from "../Reviews/Reviews";

const HeroRoute = () => {
  return (
    <main>
      <HeroSliderAnimation />
      <CampHighlights />
      <AboutHome />
      <DolphinAdventureCard />
      <Reviews />
    </main>
  );
};

export default HeroRoute;