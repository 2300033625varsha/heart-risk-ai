# Heart Risk AI — Agent Guide

## Project structure
```
heart-risk-ai/
├── backend/          # Flask API + ML model
│   ├── app.py        # Single POST /predict endpoint
│   ├── train_model.py# LogisticRegression, saves model.pkl
│   ├── model.pkl     # Pre-trained pickle
│   └── requirements.txt
├── frontend/         # Create React App (react-scripts 5, React 18)
│   ├── src/
│   │   ├── App.js    # State owner: result, loading, error, history
│   │   ├── components/   # Header, PredictionForm, ResultCard, PredictionHistory, Footer
│   │   ├── context/ThemeContext.js  # Dark/light, persisted to localStorage('heartRiskTheme')
│   │   ├── services/api.js          # Axios -> http://127.0.0.1:5000/predict
│   │   └── css/App.css              # All styles (980 lines, CSS custom properties)
│   └── package.json
├── dataset/heart.csv # 1025 rows, 14 cols (13 features + target)
└── notebooks/        # Empty
```

## Running the app
Two parallel terminals required:
- **Backend:** `cd backend && python app.py` (port 5000, CORS enabled)
- **Frontend:** `cd frontend && npm start` (port 3000, proxied to 5000)

Dependencies:
- Backend: `pip install flask flask-cors scikit-learn pandas numpy joblib matplotlib seaborn`
- Frontend: `npm install`

## Model training
```bash
cd backend && python train_model.py
```
- LogisticRegression (max_iter=1000), 80/20 split, random_state=42
- Downloads dataset from GitHub if `../dataset/heart.csv` missing
- Saves `model.pkl` in `backend/`

## API contract
POST `/predict` with `{"features": [13 numbers]}` → `{"prediction": 0|1, "risk_probability": float}`

## Frontend specifics
- Theme defaults to dark; toggle via `ThemeContext` / button in header
- Form validates all 13 fields client-side (min/max, numeric, non-empty)
- History stores last 10 predictions in component state (no persistence)
- Risk percentage shown is real `risk_probability` from backend

## Known quirks
- No root `.gitignore`, no CI, no Docker, no tests configured
- Python 3.14.3 via `uv` venv at `.venv/`
- No TypeScript, no testing framework beyond CRA defaults
- dataset/heart.csv has some near-duplicate rows
