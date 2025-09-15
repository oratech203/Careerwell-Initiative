import React, { useState, useEffect } from "react";
import Header, { type PageType } from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import FocusAreas from "./components/FocusAreas";
import Programs from "./components/Programs";
import Impact from "./components/Impact";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";
import Vision from "./components/Vision"; // 👈 import Vision

const App: React.FC = () => {
  const [page, setPage] = useState<PageType>("home");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <>
      <Header current={page} onNavigate={setPage} />

      <main>
        {/* 👇 Home page section */}
        <div id="home" className={`page ${page === "home" ? "active" : ""}`}>
          <Hero onNavigate={setPage} />
          <FocusAreas />
          <Vision /> {/* 👈 Vision now part of Home */}
        </div>

        {/* Other sections */}
        <div id="about" className={`page ${page === "about" ? "active" : ""}`}>
          <About />
        </div>
        <div
          id="programs"
          className={`page ${page === "programs" ? "active" : ""}`}
        >
          <Programs />
        </div>
        <div
          id="impact"
          className={`page ${page === "impact" ? "active" : ""}`}
        >
          <Impact />
        </div>
        <div
          id="contact"
          className={`page ${page === "contact" ? "active" : ""}`}
        >
          <ContactForm />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default App;
