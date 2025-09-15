import React from "react";

const Programs: React.FC = () => {
  return (
    <section className="programs">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2>Our Programs</h2>
          <p>
            Comprehensive initiatives designed to empower individuals across
            four core focus areas
          </p>
        </div>

        {/* Program Cards */}
        <div className="programs-grid">
          <div className="program-card">
            <div className="program-icon">📖</div>
            <h3>Information Access & Awareness</h3>
            <p>
              We provide clear, reliable, and relevant information through
              workshops, online resources, and community sessions. Our goal is
              to ensure individuals have access to accurate career information,
              industry trends, and educational pathways that enable informed
              decision-making.
            </p>
            <h4>Programs Include:</h4>
            <ul>
              <li>Career Information Sessions</li>
              <li>Industry Trend Workshops</li>
              <li>Educational Pathway Guidance</li>
              <li>Resource Libraries & Databases</li>
            </ul>
          </div>

          <div className="program-card">
            <div className="program-icon">🛠️</div>
            <h3>Skill Development</h3>
            <p>
              Our skill development programs focus on both technical and soft
              skills that are essential in today’s job market. We offer hands-on
              training, workshops, and certification programs designed to
              enhance employability and career advancement prospects.
            </p>
            <h4>Programs Include:</h4>
            <ul>
              <li>Technical Skills Training</li>
              <li>Soft Skills Workshops</li>
              <li>Professional Certification Programs</li>
              <li>Digital Literacy Courses</li>
            </ul>
          </div>

          <div className="program-card">
            <div className="program-icon">🤝</div>
            <h3>Mentorship & Guidance</h3>
            <p>
              We connect young people with experienced professionals who serve
              as mentors, providing personalized guidance, career advice, and
              support. Our mentorship programs create lasting relationships that
              help individuals navigate their career journeys with confidence.
            </p>
            <h4>Programs Include:</h4>
            <ul>
              <li>One-on-One Mentorship</li>
              <li>Group Mentoring Sessions</li>
              <li>Career Coaching Programs</li>
              <li>Peer Support Networks</li>
            </ul>
          </div>

          <div className="program-card">
            <div className="program-icon">🌍</div>
            <h3>Capacity Building for Communities</h3>
            <p>
              We work with entire communities to create sustainable change
              through education, training, and empowerment programs. Our
              community-focused initiatives aim to build local capacity and
              create opportunities for collective growth and development.
            </p>
            <h4>Programs Include:</h4>
            <ul>
              <li>Community Leadership Training</li>
              <li>Entrepreneurship Programs</li>
              <li>Youth Empowerment Initiatives</li>
              <li>Local Capacity Building Workshops</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Program Features */}
      <div className="container">
        <div className="section-header">
          <h2>Program Features</h2>
          <p>What makes our programs unique and effective</p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-icon">💡</span>
            <h4>Personalized Approach</h4>
            <p>
              Each program is tailored to meet individual needs and career
              goals, ensuring maximum relevance and impact.
            </p>
          </div>

          <div className="feature-card">
            <span className="feature-icon">🌐</span>
            <h4>Accessible Delivery</h4>
            <p>
              Programs are delivered through multiple channels including online,
              in-person, and hybrid formats for maximum accessibility.
            </p>
          </div>

          <div className="feature-card">
            <span className="feature-icon">👨‍🏫</span>
            <h4>Expert Facilitators</h4>
            <p>
              Our programs are led by industry experts, experienced
              professionals, and certified trainers with proven track records.
            </p>
          </div>

          <div className="feature-card">
            <span className="feature-icon">📊</span>
            <h4>Measurable Outcomes</h4>
            <p>
              We track progress and measure success through clear metrics and
              regular feedback to ensure continuous improvement.
            </p>
          </div>

          <div className="feature-card">
            <span className="feature-icon">🔄</span>
            <h4>Continuous Support</h4>
            <p>
              Participants receive ongoing support even after program completion
              through alumni networks and follow-up sessions.
            </p>
          </div>

          <div className="feature-card">
            <span className="feature-icon">⚡</span>
            <h4>Innovation Focus</h4>
            <p>
              We incorporate the latest tools, technologies, and methodologies
              to keep our programs current and effective.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
