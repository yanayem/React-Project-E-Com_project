import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useEffect, lazy, Suspense, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";
import "@fontsource/poppins";

import TopBar from "./component/TopBar";
import Navbar from "./component/Navbar";
import Intro from "./component/Intro";
import MainNavbar from "./component/MainNavBar";
import Img_section from "./component/Img_section";
import Section1 from "./component/Section1";
import Section2 from "./component/Section2";
import Section3 from "./component/Section3";
import Infosection from "./component/infosection";
import CustomarReview from "./component/Customarreview";
import SimilarRestaurants from "./component/similarres";
import Footer from "./component/Footer";
import SignAndLog from "./component/SignAndLog";

const Location = lazy(() => import("./component/Location"));

function App() {
  const [showScroll, setShowScroll] = useState(false);
  const [activeSection, setActiveSection] = useState("All");

  useEffect(() => {
    document.title = "Food Delivery";

    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
    scrollToTop(); // Optional: scroll to top when switching
  };

  return (
    <>
      <header className="container">
        <TopBar />
        <Navbar />
        <Intro />
      </header>

      <nav>
        <MainNavbar handleSectionChange={handleSectionChange} />

        {/* Conditionally render Section1 when "Burgers" is clicked */}
        {activeSection === "Burgers" && <Section1 />}

        {/* You can add other sections here too */}
      </nav>

      <main className="container">
        <Img_section />

        {/* Conditionally render sections */}
        {activeSection === "All" || activeSection === "Burgers" ? (
          <Section1 />
        ) : null}
        {activeSection === "Fries" ? <Section2 /> : null}
        {activeSection === "Desserts" ? <Section3 /> : null}

        {activeSection === "All" && (
          <>
            <Infosection />
            <Suspense fallback={<div>Loading map...</div>}>
              <Location />
            </Suspense>
          </>
        )}
      </main>

      {activeSection === "All" && (
        <>
          <section>
            <CustomarReview />
          </section>
          <main className="container">
            <SimilarRestaurants />
          </main>
        </>
      )}

      <footer>
        <Footer />
      </footer>
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="btn btn-primary scroll-top-btn"
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            borderRadius: "50%",
            padding: "10px 15px",
            zIndex: 1000,
          }}
        >
          ↑
        </button>
      )}
    </>
  );
}

export default App;
