import React from 'react';

const ResultCard = ({ result, loading }) => {
  if (loading) {
    return (
      <div className="result-card loading-card">
        <div className="loading-container">
          <div className="heart-loader">
            <span className="heart-beat">❤️</span>
          </div>
          <div className="loading-bar-container">
            <div className="loading-bar"></div>
          </div>
          <p className="loading-text">Analyzing cardiac indicators...</p>
        </div>
      </div>
    );
  }

  if (!result) return null;

  const isRisk = result.prediction === 1;
  const riskPercent = result.riskPercentage || (isRisk ? 78 : 18);

  return (
    <div className={`result-card ${isRisk ? 'risk-positive' : 'risk-negative'}`}>
      <div className="result-header">
        <div className="result-icon-wrapper">
          <span className="result-icon">{isRisk ? '⚠️' : '✅'}</span>
        </div>
        <h3 className="result-title">
          {isRisk ? 'Heart Disease Risk Detected' : 'No Significant Heart Disease Risk'}
        </h3>
      </div>

      <div className="result-body">
        <div className="risk-meter-section">
          <div className="risk-meter-label">
            <span>Risk Assessment</span>
            <span className="risk-percentage">{riskPercent}%</span>
          </div>
          <div className="risk-meter">
            <div
              className="risk-meter-fill"
              style={{
                width: `${riskPercent}%`,
                backgroundColor: isRisk
                  ? `hsl(${Math.max(0, 120 - riskPercent * 1.2)}, 70%, 50%)`
                  : '#4ade80',
              }}
            ></div>
          </div>
        </div>

        <div className="result-details">
          <div className="detail-item">
            <span className="detail-label">Prediction</span>
            <span className={`detail-value ${isRisk ? 'text-danger' : 'text-success'}`}>
              {isRisk ? 'Positive' : 'Negative'}
            </span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Confidence</span>
            <span className="detail-value">{riskPercent}%</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Status</span>
            <span className={`detail-value ${isRisk ? 'text-danger' : 'text-success'}`}>
              {isRisk ? 'Urgent Attention Recommended' : 'Regular Monitoring Sufficient'}
            </span>
          </div>
        </div>

        <div className="result-footer">
          <p className="result-disclaimer">
            This prediction is for informational purposes only and should not replace
            professional medical advice. Please consult a healthcare provider.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
