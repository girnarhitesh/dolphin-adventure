import { Routes, Route, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import HeroRoute from "./components/HomeComponents/HeroRoutes/HeroRoute";
import Footer from "./components/OtherRouteComponents/Footer/Footer";
import NotFound from "./Components/OtherRouteComponents/NotFound/NotFound";
import { BookingProvider } from "./Context/BookingContext";
import BookingModal from "./Components/CommonComponents/BookingModal/BookingModal";
import Navigation from "./Components/OtherRouteComponents/Navigation/Navigation";
import FloatingCallButton from "./Components/OtherRouteComponents/FloatingCallButton/FloatingCallButton";
import PrivacyPolicy from "./Components/OtherRouteComponents/PrivacyPolicy/PrivacyPolicy";
import TermsAndConditions from "./Components/OtherRouteComponents/TermsAndConditions/TermsAndConditions";
import RefundPolicy from "./Components/OtherRouteComponents/RefundPolicy/RefundPolicy";
import LiabilityWaiver from "./Components/OtherRouteComponents/LiabilityWaiver/LiabilityWaiver";
//import SiteMap from "./Components/OtherRouteComponents/SiteMap/SiteMap";

// Helper component to handle smooth scrolling to hashes across pages
const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        // Use a small timeout to ensure the DOM is ready if navigating between pages
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [hash]);

  return null;
};

function App({ isPrerender = false }) {
  return (
    <BookingProvider>
      {!isPrerender && <ScrollToHash />}
      <Routes>
          <Route
            path="/"
            element={
              <>
                <Navigation />
                <HeroRoute />
                <FloatingCallButton />
                <Footer />
              </>
            }
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/liability-waiver" element={<LiabilityWaiver />} />
          {/* <Route path="/sitemap" element={<SiteMap />} /> */}
          <Route path="*" element={<NotFound />} />
      </Routes>
      <BookingModal isPrerender={isPrerender} />
    </BookingProvider>
  );
}

export default App;

