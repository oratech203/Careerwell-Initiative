import React, { useState } from "react";
import "./Contact.css";

const Contact: React.FC = () => {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("SUCCESS");

    // clear form fields
    const form = e.currentTarget;
    form.reset();
  };

  return (
    <section className="contact container">
      <h1>Get Involved</h1>
      <h1>Get Involved</h1>
      <p className="subtitle">
        Join us in building a generation powered by knowledge and driven by
        purpose
      </p>

      <div className="contact-grid">
        {/* Left: Contact Form */}
        <div className="contact-form">
          <h3>Send us a Message</h3>
          <form onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              required
            />

            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />

            <label>Area of Interest</label>
            <select name="interest" required>
              <option>Select an option</option>
              <option>Join as a Participant</option>
              <option>Become a Mentor</option>
              <option>Partnership Opportunities</option>
              <option>Volunteer with Us</option>
              <option>General Inquiry</option>
            </select>

            <label>Message</label>
            <textarea
              name="message"
              placeholder="Tell us how you'd like to get involved or any questions you have..."
            />

            <button type="submit" className="btn-submit">
              Send Message
            </button>
          </form>

          {/* Submission Feedback */}
          {status === "SUCCESS" && (
            <p className="success-msg">
              ✅ Thank you! Your message has been received.
            </p>
          )}
        </div>

        {/* Right: Ways to Get Involved */}
        <div className="involvement">
          <h3>Ways to Get Involved</h3>
          <div className="involvement-list">
            <div className="involvement-card">
              🎓 <strong>Join Our Programs</strong>
              <p>
                Apply for our skill development, mentorship, or career guidance
                programs to advance your career journey.
              </p>
            </div>
            <div className="involvement-card">
              🤝 <strong>Become a Mentor</strong>
              <p>
                Share your experience and expertise by mentoring young
                professionals and students in your field.
              </p>
            </div>
            <div className="involvement-card">
              🏢 <strong>Partner with Us</strong>
              <p>
                Organizations can partner with us to expand our reach and create
                more opportunities for empowerment.
              </p>
            </div>
            <div className="involvement-card">
              🙌 <strong>Volunteer</strong>
              <p>
                Contribute your time and skills to help us deliver programs and
                support our mission in your community.
              </p>
            </div>
            <div className="involvement-card">
              📢 <strong>Spread the Word</strong>
              <p>
                Help us reach more people by sharing our mission and programs
                with your network and community.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: Contact Information */}
      <div className="contact-info">
        <h3>Contact Information</h3>
        <div className="info-grid">
          <div className="info-card">
            📧 <strong>Email</strong>
            <p>info@careerwellinitiative.org</p>
          </div>
          <div className="info-card">
            📞 <strong>Phone</strong>
            <p>+234 (0) 123 456 7890</p>
          </div>
          <div className="info-card">
            📍 <strong>Address</strong>
            <p>Lagos, Nigeria</p>
          </div>
          <div className="info-card">
            ⏰ <strong>Office Hours</strong>
            <p>Mon - Fri: 9:00 AM - 5:00 PM</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
