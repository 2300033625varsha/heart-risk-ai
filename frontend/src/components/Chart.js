import React from 'react';

const Chart = ({ history }) => {
  if (!history || history.length < 2) return null;

  const chartData = [...history].reverse();
  const maxRisk = Math.max(...chartData.map(h => h.riskPercentage), 100);

  return (
    <div className="chart-card">
      <div className="chart-header">
        <span className="chart-icon">📈</span>
        <h3>Risk Trend</h3>
        <span className="chart-count">{history.length} data points</span>
      </div>
      <div className="chart-body">
        <div className="bar-chart">
          {chartData.map((item, i) => (
            <div className="bar-group" key={item.id}>
              <div className="bar-label">{item.riskPercentage}%</div>
              <div className="bar-track">
                <div
                  className={`bar-fill ${item.prediction === 1 ? 'bar-risk' : 'bar-safe'}`}
                  style={{ height: `${(item.riskPercentage / maxRisk) * 100}%` }}
                ></div>
              </div>
              <div className="bar-date">
                {new Date(item.timestamp).toLocaleDateString?.() || `${i + 1}`}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chart;
