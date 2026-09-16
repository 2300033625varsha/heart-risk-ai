from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np

app = Flask(__name__)
CORS(app)

# Load trained model
model = pickle.load(open("model.pkl", "rb"))

@app.route("/")
def home():
    return "Heart Risk Prediction API Running!"

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.json

        features = np.array(data["features"]).reshape(1, -1)

        prediction = model.predict(features)[0]

        probability = model.predict_proba(features)[0][1]

        return jsonify({
            "prediction": int(prediction),
            "risk_probability": round(float(probability) * 100, 2)
        })

    except Exception as e:
        return jsonify({
            "error": str(e)
        })
if __name__ == "__main__":
    app.run(debug=True)