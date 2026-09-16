import React, { useState } from 'react';
import PredictionForm from '../components/PredictionForm';
import ResultCard from '../components/ResultCard';
import PredictionHistory from '../components/PredictionHistory';
import Chart from '../components/Chart';

const Dashboard = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [history, setHistory] = useState([]);

  const handleResult = (data) => {
    setResult(data);
  };

  const handleHistorySelect = (item) => {
    setResult(item);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="page-dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Cardiac Risk Assessment</h1>
        <p className="dashboard-subtitle">
          Enter patient clinical parameters for an AI-powered risk evaluation
        </p>
      </div>

      {error && (
        <div className="error-banner">
          <span className="error-icon">❌</span>
          <div className="error-content">
            <strong>Error:</strong> {error}
          </div>
          <button className="error-close" onClick={() => setError(null)}>✕</button>
        </div>
      )}

      <div className="dashboard-layout">
        <div className="dashboard-main">
          <PredictionForm
            onResult={handleResult}
            setLoading={setLoading}
            setError={setError}
            history={history}
            setHistory={setHistory}
          />
        </div>
        <div className="dashboard-sidebar">
          <ResultCard result={result} loading={loading} />
          <PredictionHistory
            history={history}
            onSelect={handleHistorySelect}
          />
          <Chart history={history} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
