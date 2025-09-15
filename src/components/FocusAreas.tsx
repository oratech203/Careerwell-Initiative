import React from "react";
import AreaCard from "./AreaCard";

const FocusAreas: React.FC = () => {
  return (
    <section className="focus-areas">
      <div className="container">
        <div className="section-header">
          <h2>Our Core Focus Areas</h2>
          <p>
            Comprehensive support across four key pillars of career development
            to guide, empower, and inspire young people.
          </p>
        </div>

        <div className="areas-grid">
          <AreaCard icon="📚" title="Information Access">
            Providing clear, reliable information to help individuals make
            informed career and life decisions through accessible resources.
          </AreaCard>

          <AreaCard icon="🛠️" title="Skill Development">
            Equipping people with practical and professional skills to succeed
            in today's competitive and evolving job market.
          </AreaCard>

          <AreaCard icon="🤝" title="Mentorship & Guidance">
            Connecting young people with experienced mentors and role models who
            can guide their career journeys effectively.
          </AreaCard>

          <AreaCard icon="🌟" title="Community Building">
            Creating opportunities for communities to grow collectively through
            education, training, and empowerment programs.
          </AreaCard>
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;
