import React from 'react';

const features = [
  { key: 'age', label: 'Age', desc: 'Age of the patient in years.' },
  { key: 'sex', label: 'Sex', desc: '0 = Female, 1 = Male.' },
  { key: 'cp', label: 'Chest Pain Type (cp)', desc: '0 = Typical angina, 1 = Atypical angina, 2 = Non-anginal pain, 3 = Asymptomatic.' },
  { key: 'trestbps', label: 'Resting Blood Pressure (trestbps)', desc: 'Resting systolic blood pressure in mm Hg.' },
  { key: 'chol', label: 'Cholesterol (chol)', desc: 'Serum cholesterol in mg/dl.' },
  { key: 'fbs', label: 'Fasting Blood Sugar (fbs)', desc: '0 = False, 1 = True (blood sugar > 120 mg/dl).' },
  { key: 'restecg', label: 'Resting ECG (restecg)', desc: '0 = Normal, 1 = ST-T wave abnormality, 2 = Left ventricular hypertrophy.' },
  { key: 'thalach', label: 'Max Heart Rate (thalach)', desc: 'Maximum heart rate achieved during exercise.' },
  { key: 'exang', label: 'Exercise Induced Angina (exang)', desc: '0 = No, 1 = Yes.' },
  { key: 'oldpeak', label: 'ST Depression (oldpeak)', desc: 'ST depression induced by exercise relative to rest.' },
  { key: 'slope', label: 'Slope', desc: '0 = Upsloping, 1 = Flat, 2 = Downsloping.' },
  { key: 'ca', label: 'Major Vessels (ca)', desc: 'Number of major vessels colored by fluoroscopy (0-4).' },
  { key: 'thal', label: 'Thalassemia (thal)', desc: '0 = Normal, 1 = Fixed defect, 2 = Reversible defect, 3 = Normal (alternate).' },
];

const steps = [
  { num: '1', title: 'Enter clinical data', desc: 'Fill in the 13 clinical parameters. The form validates inputs in real-time to ensure correct values.' },
  { num: '2', title: 'Submit for analysis', desc: 'Data is sent securely to the Flask backend where the Logistic Regression model processes it.' },
  { num: '3', title: 'View results', desc: 'Instant prediction with risk probability score, visualized with a color-coded meter.' },
  { num: '4', title: 'Track history', desc: 'Your last 10 predictions are stored for comparison and trend monitoring.' },
];

const HowItWorks = () => (
  <div className="page-how-it-works">
    <section className="how-hero">
      <h1 className="page-title">How It Works</h1>
      <p className="page-subtitle">From clinical data to risk prediction in seconds</p>
    </section>

    <section className="how-section">
      <h2 className="section-title">The Process</h2>
      <div className="steps-timeline">
        {steps.map((s, i) => (
          <div className="step-card" key={i}>
            <div className="step-number">{s.num}</div>
            <div className="step-content">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="how-section">
      <h2 className="section-title">Clinical Features</h2>
      <p className="section-subtitle">The 13 input parameters used by the model</p>
      <div className="features-table">
        {features.map((f, i) => (
          <div className="feature-row" key={i}>
            <div className="feature-row-key">{f.label}</div>
            <div className="feature-row-desc">{f.desc}</div>
          </div>
        ))}
      </div>
    </section>

    <section className="how-section">
      <h2 className="section-title">The Model</h2>
      <div className="model-info">
        <div className="model-stat">
          <span className="model-stat-value">Logistic Regression</span>
          <span className="model-stat-label">Algorithm</span>
        </div>
        <div className="model-stat">
          <span className="model-stat-value">80/20</span>
          <span className="model-stat-label">Train/Test Split</span>
        </div>
        <div className="model-stat">
          <span className="model-stat-value">1025</span>
          <span className="model-stat-label">Training Records</span>
        </div>
        <div className="model-stat">
          <span className="model-stat-value">1000</span>
          <span className="model-stat-label">Max Iterations</span>
        </div>
      </div>
    </section>
  </div>
);

export default HowItWorks;
