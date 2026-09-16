import React from 'react';

const About = () => (
  <div className="page-about">
    <section className="about-hero">
      <h1 className="page-title">About HeartRisk AI</h1>
      <p className="page-subtitle">Advancing cardiac care through machine learning</p>
    </section>

    <div className="about-content">
      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          HeartRisk AI aims to make preliminary cardiac risk assessment accessible and efficient
          using machine learning. By analyzing key clinical parameters, our system provides
          instant risk probability scores to support healthcare decision-making.
        </p>
      </section>

      <section className="about-section">
        <h2>The Technology</h2>
        <p>
          The prediction engine uses a Logistic Regression model trained on the Cleveland Heart
          Disease dataset (1025 patient records, 13 clinical features). The model achieves strong
          predictive performance by identifying patterns across key cardiac risk indicators.
        </p>
      </section>

      <section className="about-section">
        <h2>Tech Stack</h2>
        <div className="tech-stack">
          {[
            { name: 'React 18', desc: 'Frontend UI framework', color: '#61dafb' },
            { name: 'Flask', desc: 'Python REST API backend', color: '#000' },
            { name: 'scikit-learn', desc: 'ML model training & inference', color: '#f89939' },
            { name: 'Axios', desc: 'HTTP client for API calls', color: '#5a29e4' },
          ].map((t, i) => (
            <div className="tech-item" key={i}>
              <span className="tech-dot" style={{ background: t.color }}></span>
              <div>
                <strong>{t.name}</strong>
                <p>{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="about-section">
        <h2>Disclaimer</h2>
        <p className="disclaimer-text">
          This tool is for educational and informational purposes only. It is not a medical device
          and should not replace professional medical advice, diagnosis, or treatment. Always
          consult a qualified healthcare provider for cardiac health concerns.
        </p>
      </section>
    </div>
  </div>
);

export default About;
