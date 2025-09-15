import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const About: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // container + page styles
  const containerStyle: React.CSSProperties = {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "0 16px",
  };
  const pageStyle: React.CSSProperties = {
    padding: "80px 20px",
    background: "#f7f8fb",
    color: "#07224a",
  };

  // header
  const headerStyle: React.CSSProperties = {
    textAlign: "center",
    marginBottom: 40,
  };
  const h2Style: React.CSSProperties = {
    fontSize: "2.2rem",
    fontWeight: 700,
    margin: 0,
    color: "#07224a",
  };
  const subtitleStyle: React.CSSProperties = {
    maxWidth: 750,
    margin: "10px auto 0",
    fontSize: "1.05rem",
    color: "#556577",
  };

  // story + stats layout
  const storyStatsStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "1.2fr 0.8fr",
    gap: 60,
    alignItems: "start",
    marginBottom: 40,
  };

  // story text
  const ourStoryH3: React.CSSProperties = {
    fontSize: "1.6rem",
    fontWeight: 700,
    color: "#07224a",
    marginBottom: 14,
  };
  const ourStoryP: React.CSSProperties = {
    fontSize: "1.05rem",
    color: "#46556a",
    lineHeight: 1.8,
    marginBottom: 14,
  };

  // stats
  const statsGridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 24,
  };
  const statCardStyle: React.CSSProperties = {
    background: "#f5f5f5",
    padding: "36px 24px",
    borderRadius: 12,
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
  };
  const statNumberStyle: React.CSSProperties = {
    fontSize: "2.4rem",
    fontWeight: 700,
    color: "#1d4ed8",
    margin: 0,
  };
  const statLabelStyle: React.CSSProperties = {
    fontSize: "0.9rem",
    fontWeight: 500,
    color: "#333",
    textTransform: "uppercase",
    marginTop: 8,
    letterSpacing: "0.5px",
  };

  // values grid (with icons)
  const valuesGridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 24,
    marginTop: 40,
  };
  const valueCardStyle: React.CSSProperties = {
    background: "#fff",
    padding: 28,
    borderRadius: 12,
    boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
    textAlign: "center",
  };
  const valueIconStyle: React.CSSProperties = {
    fontSize: 28,
    marginBottom: 12,
  };
  const valueH4Style: React.CSSProperties = {
    fontSize: "1.1rem",
    fontWeight: 700,
    color: "#07224a",
    marginBottom: 10,
  };
  const valuePStyle: React.CSSProperties = {
    fontSize: "0.95rem",
    color: "#46556a",
    lineHeight: 1.6,
  };

  // who we serve
  const whoStyle: React.CSSProperties = { marginTop: 60, textAlign: "center" };
  const serveGridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 20,
    marginTop: 20,
  };
  const serveCardStyle: React.CSSProperties = {
    background: "#fff",
    borderRadius: 12,
    padding: 28,
    boxShadow: "0 8px 24px rgba(16,24,40,0.06)",
    textAlign: "center",
  };
  const serveIconStyle: React.CSSProperties = {
    width: 64,
    height: 64,
    margin: "0 auto 14px",
    display: "grid",
    placeItems: "center",
    background: "linear-gradient(180deg,#eaf7ff,#dff3ff)",
    borderRadius: "50%",
    fontSize: 28,
  };

  return (
    <section style={pageStyle}>
      <div style={containerStyle}>
        {/* Header */}
        <div style={headerStyle}>
          <h2 style={h2Style}>About CareerWell Initiative</h2>
          <p style={subtitleStyle}>
            Dedicated to empowering individuals through knowledge, skills, and
            purposeful career development
          </p>
        </div>

        {/* Our Story + Stats */}
        <div style={storyStatsStyle} ref={ref}>
          <div>
            <h3 style={ourStoryH3}>Our Story</h3>
            <p style={ourStoryP}>
              CareerWell Initiative was founded on the belief that every
              individual deserves access to the knowledge and resources needed
              to build a meaningful career. Our name reflects a “well” of
              opportunities, guidance, and resources for building sustainable
              career paths.
            </p>
            <p style={ourStoryP}>
              We recognize that in today’s rapidly changing world, having access
              to the right information at the right time can make all the
              difference in someone’s career trajectory. That’s why we’ve made
              it our mission to bridge the gap between potential and
              opportunity.
            </p>
          </div>

          {/* Stats */}
          <div style={statsGridStyle}>
            <div style={statCardStyle}>
              <h4 style={statNumberStyle}>
                {inView ? <CountUp end={5000} duration={2.5} /> : "0"}+
              </h4>
              <p style={statLabelStyle}>Lives Impacted</p>
            </div>
            <div style={statCardStyle}>
              <h4 style={statNumberStyle}>
                {inView ? <CountUp end={50} duration={2} /> : "0"}+
              </h4>
              <p style={statLabelStyle}>Programs Delivered</p>
            </div>
            <div style={statCardStyle}>
              <h4 style={statNumberStyle}>
                {inView ? <CountUp end={100} duration={2} /> : "0"}+
              </h4>
              <p style={statLabelStyle}>Mentors Connected</p>
            </div>
            <div style={statCardStyle}>
              <h4 style={statNumberStyle}>
                {inView ? <CountUp end={25} duration={2} /> : "0"}+
              </h4>
              <p style={statLabelStyle}>Communities Served</p>
            </div>
          </div>
        </div>

        {/* Values with icons */}
        <div style={valuesGridStyle}>
          <div style={valueCardStyle}>
            <div style={valueIconStyle}>💡</div>
            <h4 style={valueH4Style}>Knowledge-Driven</h4>
            <p style={valuePStyle}>
              Information as the foundation of empowerment
            </p>
          </div>
          <div style={valueCardStyle}>
            <div style={valueIconStyle}>🎯</div>
            <h4 style={valueH4Style}>Purpose-Led</h4>
            <p style={valuePStyle}>Encouraging meaningful career choices</p>
          </div>
          <div style={valueCardStyle}>
            <div style={valueIconStyle}>🤝</div>
            <h4 style={valueH4Style}>Inclusive</h4>
            <p style={valuePStyle}>
              Reaching diverse groups regardless of background
            </p>
          </div>
          <div style={valueCardStyle}>
            <div style={valueIconStyle}>🚀</div>
            <h4 style={valueH4Style}>Innovative</h4>
            <p style={valuePStyle}>Using modern tools to connect and inspire</p>
          </div>
        </div>

        {/* Who We Serve */}
        <div style={whoStyle}>
          <h3 style={{ fontSize: "1.6rem", color: "#07224a", marginBottom: 8 }}>
            Who We Serve
          </h3>
          <p
            style={{
              color: "#556577",
              marginBottom: 20,
              maxWidth: 760,
              margin: "0 auto",
            }}
          >
            Our programs are designed to meet the diverse needs of individuals
            at different career stages
          </p>

          <div style={serveGridStyle}>
            <div style={serveCardStyle}>
              <div style={serveIconStyle}>🎓</div>
              <h4 style={{ margin: "10px 0", color: "#07224a" }}>
                Students & Graduates
              </h4>
              <p
                style={{
                  color: "#58677f",
                  fontSize: "0.96rem",
                  lineHeight: 1.6,
                }}
              >
                Recent graduates and current students seeking clarity,
                direction, and practical guidance to transition from education
                to meaningful employment.
              </p>
            </div>

            <div style={serveCardStyle}>
              <div style={serveIconStyle}>💼</div>
              <h4 style={{ margin: "10px 0", color: "#07224a" }}>
                Young Professionals
              </h4>
              <p
                style={{
                  color: "#58677f",
                  fontSize: "0.96rem",
                  lineHeight: 1.6,
                }}
              >
                Early-career professionals looking to advance their skills,
                expand their networks, and make strategic career moves.
              </p>
            </div>

            <div style={serveCardStyle}>
              <div style={serveIconStyle}>🌍</div>
              <h4 style={{ margin: "10px 0", color: "#07224a" }}>
                Underserved Communities
              </h4>
              <p
                style={{
                  color: "#58677f",
                  fontSize: "0.96rem",
                  lineHeight: 1.6,
                }}
              >
                Individuals from underserved communities who lack access to
                career resources but are eager to grow and succeed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
