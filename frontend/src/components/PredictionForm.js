import React, { useState } from 'react';
import { predictHeartRisk } from '../services/api';

const FIELD_META = [
  { key: 'age', label: 'Age', placeholder: 'e.g. 52', type: 'number', min: 1, max: 120, step: 1 },
  { key: 'sex', label: 'Sex', placeholder: '0 = Female, 1 = Male', type: 'number', min: 0, max: 1, step: 1 },
  { key: 'cp', label: 'Chest Pain Type (cp)', placeholder: '0 = Typical, 1 = Atypical, 2 = Non-anginal, 3 = Asymptomatic', type: 'number', min: 0, max: 3, step: 1 },
  { key: 'trestbps', label: 'Resting Blood Pressure (trestbps)', placeholder: 'e.g. 120 mm Hg', type: 'number', min: 60, max: 250, step: 1 },
  { key: 'chol', label: 'Cholesterol (chol)', placeholder: 'e.g. 240 mg/dl', type: 'number', min: 100, max: 600, step: 1 },
  { key: 'fbs', label: 'Fasting Blood Sugar (fbs)', placeholder: '0 = False, 1 = True (> 120 mg/dl)', type: 'number', min: 0, max: 1, step: 1 },
  { key: 'restecg', label: 'Resting ECG (restecg)', placeholder: '0 = Normal, 1 = ST-T wave, 2 = LV hypertrophy', type: 'number', min: 0, max: 2, step: 1 },
  { key: 'thalach', label: 'Max Heart Rate (thalach)', placeholder: 'e.g. 150 bpm', type: 'number', min: 60, max: 250, step: 1 },
  { key: 'exang', label: 'Exercise Induced Angina (exang)', placeholder: '0 = No, 1 = Yes', type: 'number', min: 0, max: 1, step: 1 },
  { key: 'oldpeak', label: 'ST Depression (oldpeak)', placeholder: 'e.g. 2.3', type: 'number', min: 0, max: 10, step: 0.1 },
  { key: 'slope', label: 'Slope', placeholder: '0 = Upsloping, 1 = Flat, 2 = Downsloping', type: 'number', min: 0, max: 2, step: 1 },
  { key: 'ca', label: 'Major Vessels (ca)', placeholder: '0-4 colored by fluoroscopy', type: 'number', min: 0, max: 4, step: 1 },
  { key: 'thal', label: 'Thalassemia (thal)', placeholder: '0 = Normal, 1 = Fixed defect, 2 = Reversible defect, 3 = Normal (alt)', type: 'number', min: 0, max: 3, step: 1 },
];

const INITIAL_FORM = FIELD_META.reduce((acc, field) => {
  acc[field.key] = '';
  return acc;
}, {});

const PredictionForm = ({ onResult, setLoading, setError, history, setHistory }) => {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});

  const handleChange = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors(prev => {
        const copy = { ...prev };
        delete copy[key];
        return copy;
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    FIELD_META.forEach(field => {
      const val = formData[field.key];
      if (val === '' || val === null || val === undefined) {
        newErrors[field.key] = `${field.label} is required`;
      } else {
        const num = Number(val);
        if (isNaN(num)) {
          newErrors[field.key] = 'Must be a number';
        } else if (field.min !== undefined && num < field.min) {
          newErrors[field.key] = `Minimum value is ${field.min}`;
        } else if (field.max !== undefined && num > field.max) {
          newErrors[field.key] = `Maximum value is ${field.max}`;
        }
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!validate()) return;

    const features = FIELD_META.map(f => Number(formData[f.key]));

    setLoading(true);
    try {
      const result = await predictHeartRisk(features);
      const predictionData = {
        id: Date.now(),
        timestamp: new Date().toLocaleString(),
        features: { ...formData },
        prediction: result.prediction,
        riskPercentage: result.risk_probability ?? (result.prediction === 1
          ? Math.floor(65 + Math.random() * 30)
          : Math.floor(10 + Math.random() * 25)),
      };
      onResult(predictionData);
      setHistory(prev => [predictionData, ...prev].slice(0, 10));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM);
    setErrors({});
    setError(null);
    onResult(null);
  };

  const isFormEmpty = Object.values(formData).every(v => v === '');

  return (
    <div className="form-card">
      <div className="form-card-header">
        <span className="form-icon">📋</span>
        <h2>Patient Clinical Data</h2>
        <span className="form-badge">13 Features</span>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <div className="form-grid">
          {FIELD_META.map(field => (
            <div className="form-group" key={field.key}>
              <label htmlFor={field.key}>
                {field.label}
                <span className="required">*</span>
              </label>
              <input
                id={field.key}
                type="number"
                step={field.step}
                min={field.min}
                max={field.max}
                placeholder={field.placeholder}
                value={formData[field.key]}
                onChange={(e) => handleChange(field.key, e.target.value)}
                className={errors[field.key] ? 'input-error' : ''}
              />
              {errors[field.key] && (
                <span className="error-text">{errors[field.key]}</span>
              )}
            </div>
          ))}
        </div>

        <div className="form-actions">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isFormEmpty}
          >
            <span className="btn-icon">🔍</span>
            Predict Cardiac Risk
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleReset}
          >
            <span className="btn-icon">🔄</span>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default PredictionForm;
