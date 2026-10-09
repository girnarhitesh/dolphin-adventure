import React from "react";
import HeroSliderAnimation from "../HeroSliderAnimation/HeroSliderAnimation";
import AboutHome from "../AboutHome/AboutHome";
import DolphinAdventureCard from "../DolphinAdventureCard/DolphinAdventureCard";
import Reviews from "../Reviews/Reviews";

const HeroRoute = () => {
  return (
    <main>
      <HeroSliderAnimation />
      <AboutHome />
      <DolphinAdventureCard />
      <Reviews />
    </main>
  );
};

export default HeroRoute;