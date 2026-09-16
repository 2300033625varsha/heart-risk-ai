import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-sections">
          <div className="footer-section">
            <div className="footer-brand">
              <span>❤️</span>
              <strong>HeartRisk AI</strong>
            </div>
            <p className="footer-desc">AI-powered cardiac risk assessment using machine learning.</p>
          </div>
          <div className="footer-section">
            <h4>Navigation</h4>
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/how-it-works">How It Works</Link>
            <Link to="/about">About</Link>
          </div>
          <div className="footer-section">
            <h4>Tech Stack</h4>
            <span>React 18</span>
            <span>Flask</span>
            <span>scikit-learn</span>
            <span>Python 3.14</span>
          </div>
        </div>
        <div className="footer-bottom">
          <p>AI Powered Cardiac Risk Prediction System</p>
          <p className="footer-credit">Built with React · Flask · Machine Learning</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
