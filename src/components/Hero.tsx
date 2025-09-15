import React from "react";
import type { PageType } from "./Header";

interface HeroProps {
  onNavigate: (p: PageType) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <h1>Empowering Through Knowledge</h1>
        <p>
          Transforming lives through accessible information, skill <br />development,
          and purposeful career guidance
        </p>
        <blockquote>
          "Building a generation powered by knowledge, driven by purpose."
        </blockquote>
        <div className="hero-buttons">
          <button className="cta-button" onClick={() => onNavigate("programs")}>
            Explore Programs
          </button>
          <button
            className="cta-button secondary"
            onClick={() => onNavigate("about")}
            style={{ marginLeft: "1rem" }}
          >
            Learn More
          </button>
        </div>
        <div className="scroll-down">↓</div>
      </div>
    </section>
  );
};

export default Hero;
