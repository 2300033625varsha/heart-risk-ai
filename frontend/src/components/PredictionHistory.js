import React from 'react';

const PredictionHistory = ({ history, onSelect }) => {
  if (!history || history.length === 0) return null;

  return (
    <div className="history-card">
      <div className="history-header">
        <span className="history-icon">📊</span>
        <h3>Prediction History</h3>
        <span className="history-count">{history.length} records</span>
      </div>

      <div className="history-list">
        {history.map((item, index) => (
          <div
            key={item.id}
            className={`history-item ${item.prediction === 1 ? 'history-risk' : 'history-safe'}`}
            onClick={() => onSelect && onSelect(item)}
          >
            <div className="history-item-left">
              <span className="history-indicator">
                {item.prediction === 1 ? '🔴' : '🟢'}
              </span>
              <div className="history-item-info">
                <span className="history-item-label">
                  {item.prediction === 1 ? 'Risk Detected' : 'No Risk'}
                </span>
                <span className="history-item-date">{item.timestamp}</span>
              </div>
            </div>
            <div className="history-item-right">
              <span className="history-risk-badge">{item.riskPercentage}%</span>
              <span className="history-arrow">→</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PredictionHistory;
