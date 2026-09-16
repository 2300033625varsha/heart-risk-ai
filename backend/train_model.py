import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
import pickle
import os

# Load dataset
data_path = "../dataset/heart.csv"
if not os.path.exists(data_path):
    # Download sample heart disease dataset
    url = "https://raw.githubusercontent.com/datasciencedojo/datasets/master/heart.csv"
    data = pd.read_csv(url)
    # Save to dataset folder
    os.makedirs("../dataset", exist_ok=True)
    data.to_csv(data_path, index=False)
else:
    data = pd.read_csv(data_path)

# Features and target
X = data.drop("target", axis=1)
y = data["target"]

# Split dataset
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Train model
model = LogisticRegression(max_iter=1000)
model.fit(X_train, y_train)

# Predictions
y_pred = model.predict(X_test)

# Accuracy
accuracy = accuracy_score(y_test, y_pred)

print("Model Accuracy:", accuracy)

# Save model
pickle.dump(model, open("model.pkl", "wb"))

print("Model saved successfully!")