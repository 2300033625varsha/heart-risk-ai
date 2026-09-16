                                                      ❤️ Heart Risk AI

Heart Risk AI is a machine learning-based web application that predicts cardiac risk using clinical patient data.

The project uses a **React frontend**, **Flask backend**, and a **Logistic Regression machine learning model** trained using a heart disease dataset.

---

## 🚀 Features

- ❤️ Heart risk prediction
- 📋 Patient clinical data input form
- 🤖 Machine learning prediction using Logistic Regression
- 📊 Risk probability calculation
- 📈 Prediction result visualization
- 📝 Prediction history
- 🌙 Theme support
- 📱 Responsive web interface
- 🔄 Reset prediction form
- 🔗 React frontend connected to Flask REST API

---

## 🛠️ Technologies Used

### Frontend

- React.js
- React Router
- Axios
- JavaScript
- HTML
- CSS

### Backend

- Python
- Flask
- Flask-CORS
- NumPy
- Pandas
- Scikit-learn
- Joblib

### Machine Learning

- Logistic Regression
- Train/Test Split
- Accuracy Evaluation

### Dataset

- Heart disease dataset
- 13 clinical features
- Target: `target`

---

## 📁 Project Structure

```text
heart-risk-ai/
│
├── backend/
│   ├── app.py
│   ├── model.pkl
│   ├── train_model.py
│   └── requirements.txt
│
├── dataset/
│   └── heart.csv
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── Chart.js
│   │   │   ├── Footer.js
│   │   │   ├── Header.js
│   │   │   ├── PredictionForm.js
│   │   │   ├── PredictionHistory.js
│   │   │   └── ResultCard.js
│   │   │
│   │   ├── context/
│   │   │   └── ThemeContext.js
│   │   │
│   │   ├── pages/
│   │   │   ├── About.js
│   │   │   ├── Dashboard.js
│   │   │   ├── Home.js
│   │   │   └── HowItWorks.js
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── index.css
│   │   └── css/
│   │       └── App.css
│   │
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
└── README.md
