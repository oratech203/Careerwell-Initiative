import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-column">
          <h3>CareerWell Initiative</h3>
          <p>
            Empowering individuals through knowledge, skills, and purposeful
            career development. Building a generation powered by knowledge,
            driven by purpose.
          </p>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#programs">Our Programs</a>
            </li>
            <li>
              <a href="#impact">Impact</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Our Focus</h3>
          <ul>
            <li>Information Access & Awareness</li>
            <li>Skill Development</li>
            <li>Mentorship & Guidance</li>
            <li>Community Capacity Building</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Connect With Us</h3>
          <ul>
            <li>📧 info@careerwellinitiative.org</li>
            <li>📞 +234 (0) 123 456 7890</li>
            <li>📍 Lagos, Nigeria</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} CareerWell Initiative. All rights
          reserved. | A non-profit organization dedicated to empowering through
          knowledge.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
