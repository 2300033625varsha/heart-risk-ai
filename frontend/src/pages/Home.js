import React from 'react';
import { Link } from 'react-router-dom';

const features = [
  { icon: '🤖', title: 'AI-Powered Analysis', desc: 'Logistic regression model trained on 1025 patient records for accurate cardiac risk assessment.' },
  { icon: '📊', title: '13 Clinical Features', desc: 'Comprehensive analysis using age, cholesterol, blood pressure, ECG, and 9 more clinical parameters.' },
  { icon: '⚡', title: 'Real-Time Results', desc: 'Instant predictions with risk probability scoring and detailed result visualization.' },
  { icon: '📈', title: 'Prediction History', desc: 'Track and review your last 10 risk assessments with trend monitoring.' },
];

const Home = () => (
  <div className="page-home">
    <section className="home-hero">
      <div className="hero-animation">
        <span className="floating-heart h1">❤️</span>
        <span className="floating-heart h2">💖</span>
        <span className="floating-heart h3">❤️</span>
      </div>
      <h1 className="home-hero-title">Heart Disease Risk Prediction</h1>
      <p className="home-hero-subtitle">
        Enter patient clinical parameters below for an AI-powered cardiac risk assessment
      </p>
      <Link to="/dashboard" className="btn btn-primary btn-large">
        <span className="btn-icon">🔍</span>
        Start Assessment
      </Link>
    </section>

    <section className="home-features">
      <h2 className="section-title">Why HeartRisk AI?</h2>
      <p className="section-subtitle">Leverage the power of machine learning for early cardiac risk detection</p>
      <div className="features-grid">
        {features.map((f, i) => (
          <div className="feature-card" key={i}>
            <span className="feature-icon">{f.icon}</span>
            <h3 className="feature-title">{f.title}</h3>
            <p className="feature-desc">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="home-cta">
      <h2>Ready to Assess Cardiac Risk?</h2>
      <p>Use our AI-powered prediction tool for a quick, data-driven risk evaluation.</p>
      <Link to="/dashboard" className="btn btn-primary btn-large">
        <span className="btn-icon">🚀</span>
        Go to Dashboard
      </Link>
    </section>
  </div>
);

export default Home;
