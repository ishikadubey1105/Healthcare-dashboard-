import pandas as pd
import json
import os
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import accuracy_score

# Load data
data_path = 'data/dataset.csv'
if not os.path.exists(data_path):
    print(f"Error: {data_path} not found.")
    exit(1)

df = pd.read_csv(data_path)

# Rename columns to be cleaner if needed (assuming standard UCI names)
# age, sex, cp, trestbps, chol, fbs, restecg, thalach, exang, oldpeak, slope, ca, thal, target
# The dataset might have different headers, let's normalize them
df.columns = [c.lower().strip() for c in df.columns]

print("Columns:", df.columns)

# Separate features and target
X = df.drop('target', axis=1)
y = df['target']

# Train/Test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Scale
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Train
model = LogisticRegression()
model.fit(X_train_scaled, y_train)

# Evaluate
y_pred = model.predict(X_test_scaled)
acc = accuracy_score(y_test, y_pred)
print(f"Model Accuracy: {acc:.4f}")

# Export weights and scaler params
weights = {
    'features': list(X.columns),
    'coefficients': model.coef_[0].tolist(),
    'intercept': model.intercept_[0],
    'scale_mean': scaler.mean_.tolist(),
    'scale_var': scaler.var_.tolist()
}

output_path = 'src/data/model_weights.json'
os.makedirs(os.path.dirname(output_path), exist_ok=True)
with open(output_path, 'w') as f:
    json.dump(weights, f, indent=2)

print(f"Model saved to {output_path}")
