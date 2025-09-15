import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

type Stat = {
  id: string;
  value: number;
  suffix?: string;
  label: string;
};

const STATS: Stat[] = [
  { id: "s1", value: 5000, suffix: "+", label: "Individuals Empowered" },
  { id: "s2", value: 85, suffix: "%", label: "Employment Success Rate" },
  { id: "s3", value: 200, label: "Mentorship Connections" },
  { id: "s4", value: 50, suffix: "+", label: "Community Programs" },
  { id: "s5", value: 25, suffix: "+", label: "Partner Organizations" },
  { id: "s6", value: 95, suffix: "%", label: "Participant Satisfaction" },
];

const Impact: React.FC = () => {
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });

  const { ref: storiesRef, inView: storiesInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="impact" aria-labelledby="impact-heading">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <h2 id="impact-heading">Our Impact</h2>
          <p className="section-sub">
            Measuring success through the lives we've transformed and
            communities we've empowered
          </p>
        </div>

        {/* Top Stats */}
        <div
          className="impact-stats"
          ref={statsRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "36px",
            marginTop: "40px",
          }}
        >
          {STATS.map((s) => (
            <div
              key={s.id}
              style={{
                background: "#fff",
                borderRadius: "16px",
                padding: "40px 28px",
                textAlign: "center",
                boxShadow: "0 6px 16px rgba(0,0,0,0.12)",
                minHeight: "160px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(-6px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 12px 30px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 6px 16px rgba(0,0,0,0.12)";
              }}
            >
              <div
                style={{
                  fontSize: "2.8rem",
                  fontWeight: 900,
                  color: "#1d4ed8",
                  marginBottom: "12px",
                  lineHeight: 1.2,
                }}
              >
                {statsInView ? (
                  <CountUp start={0} end={s.value} duration={2} separator="," />
                ) : (
                  "0"
                )}
                {s.suffix ?? ""}
              </div>
              <div
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "#374151",
                  textTransform: "uppercase",
                  letterSpacing: "0.8px",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Success Stories */}
        <div className="section-header" style={{ marginTop: 60 }}>
          <h2>Success Stories</h2>
          <p className="section-sub">Real transformations from real people</p>
        </div>

        <div className="stories-grid" ref={storiesRef}>
          {[
            {
              icon: "👩‍💻",
              title: "Sarah's Journey",
              quote: '"From unemployed graduate to tech professional"',
              desc: "Sarah joined our skill development program as an unemployed computer science graduate. Through our technical training and mentorship program, she gained practical coding skills and professional guidance. Today, she works as a software developer at a leading company and mentors other participants.",
            },
            {
              icon: "🧑‍🏫",
              title: "Michael's Transformation",
              quote: '"Career pivot made possible"',
              desc: "Michael was in a job that didn't fulfil him. Our career guidance helped him identify a passion for education. With our support he transitioned to teaching and now reports higher job satisfaction and purpose.",
            },
            {
              icon: "🌟",
              title: "Community Impact: Riverside",
              quote: '"Entire community transformation"',
              desc: "Our capacity building program in Riverside created 3 local businesses, trained 50+ individuals in entrepreneurship, and established a community resource center serving hundreds yearly.",
            },
          ].map((story, idx) => (
            <article
              key={idx}
              className={`story-card ${storiesInView ? "fade-in" : ""}`}
            >
              <div className="story-icon">{story.icon}</div>
              <h3 className="story-title">{story.title}</h3>
              <blockquote className="story-quote">{story.quote}</blockquote>
              <p className="story-desc">{story.desc}</p>
            </article>
          ))}
        </div>
      </div>

      {/* Key Outcomes */}
      <div className="key-outcomes">
        <div className="container">
          <div className="section-header white">
            <h2>Key Outcomes</h2>
            <p className="section-sub light">
              What our programs achieve — measurable results and meaningful
              change
            </p>
          </div>

          <div className="outcomes-grid">
            {[
              {
                title: "Career Advancement",
                text: "75% of participants report career advancement within 12 months of program completion",
              },
              {
                title: "Skill Enhancement",
                text: "90% of participants gain new technical or professional skills relevant to their goals",
              },
              {
                title: "Network Building",
                text: "Participants build professional networks with an average of 15+ meaningful connections",
              },
              {
                title: "Community Impact",
                text: "80% of participants actively contribute to community projects post-program",
              },
            ].map((item, idx) => (
              <div key={idx} className={`outcome-card fade-in`}>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
