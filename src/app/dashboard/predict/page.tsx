"use client";
import { useState } from 'react';
import styles from './predict.module.css';
import modelWeights from '@/data/model_weights.json';
import { Activity, AlertTriangle, CheckCircle } from 'lucide-react';

// Feature config for UI
const formConfig = [
    { name: 'age', label: 'Age', type: 'number', placeholder: 'e.g. 58' },
    { name: 'sex', label: 'Sex', type: 'select', options: [{ val: 1, label: 'Male' }, { val: 0, label: 'Female' }] },
    {
        name: 'cp', label: 'Chest Pain Type', type: 'select', options: [
            { val: 0, label: 'Typical Angina' },
            { val: 1, label: 'Atypical Angina' },
            { val: 2, label: 'Non-anginal Pain' },
            { val: 3, label: 'Asymptomatic' }
        ]
    },
    { name: 'trestbps', label: 'Resting Blood Pressure', type: 'number', placeholder: 'mm Hg' },
    { name: 'chol', label: 'Cholesterol', type: 'number', placeholder: 'mg/dl' },
    { name: 'fbs', label: 'Fasting Blood Sugar > 120 mg/dl', type: 'select', options: [{ val: 1, label: 'True' }, { val: 0, label: 'False' }] },
    {
        name: 'restecg', label: 'Resting ECG', type: 'select', options: [
            { val: 0, label: 'Normal' },
            { val: 1, label: 'ST-T Wave Abnormality' },
            { val: 2, label: 'Left Ventricular Hypertrophy' }
        ]
    },
    { name: 'thalach', label: 'Max Heart Rate', type: 'number', placeholder: 'bpm' },
    { name: 'exang', label: 'Exercise Induced Angina', type: 'select', options: [{ val: 1, label: 'Yes' }, { val: 0, label: 'No' }] },
    { name: 'oldpeak', label: 'ST Depression', type: 'number', step: '0.1', placeholder: '0.0' },
    {
        name: 'slope', label: 'Slope of Peak Exercise ST', type: 'select', options: [
            { val: 0, label: 'Upsloping' },
            { val: 1, label: 'Flat' },
            { val: 2, label: 'Downsloping' }
        ]
    },
    { name: 'ca', label: 'Number of Major Vessels', type: 'select', options: [0, 1, 2, 3].map(n => ({ val: n, label: n.toString() })) },
    {
        name: 'thal', label: 'Thalassemia', type: 'select', options: [
            { val: 1, label: 'Normal' },
            { val: 2, label: 'Fixed Defect' },
            { val: 3, label: 'Reversable Defect' }
        ]
    },
];

export default function HeartDiseasePredictor() {
    const [formData, setFormData] = useState<any>({});
    const [result, setResult] = useState<number | null>(null);

    const handleChange = (name: string, value: string) => {
        setFormData(prev => ({ ...prev, [name]: Number(value) }));
    };

    const predict = () => {
        // Prepare input vector
        // Order must match model_weights.features
        const inputVector = modelWeights.features.map(featureName => {
            const rawVal = formData[featureName] || 0;
            return rawVal;
        });

        // Scale inputs
        // (x - mean) / sqrt(var)
        // Wait, standard scaler uses std dev which is sqrt(var)
        // Scikit learn StandardScaler: z = (x - u) / s

        try {
            let logOdds = modelWeights.intercept;

            for (let i = 0; i < inputVector.length; i++) {
                const raw = inputVector[i];
                const mean = modelWeights.scale_mean[i];
                const variance = modelWeights.scale_var[i];
                const std = Math.sqrt(variance);
                const coef = modelWeights.coefficients[i];

                const scaled = (raw - mean) / std;
                logOdds += scaled * coef;
            }

            // Sigmoid
            const probability = 1 / (1 + Math.exp(-logOdds));
            setResult(probability);
        } catch (e) {
            console.error(e);
            alert("Error in calculation");
        }
    };

    return (
        <div className={styles.container}>
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>AI Risk Assessment</h1>
                <p style={{ color: 'var(--text-secondary)' }}>
                    Enter patient vitals to generate a real-time risk assessment using our Logistic Regression model (Accuracy: 84%).
                </p>
            </div>

            <div className={`glass-panel`} style={{ padding: '2rem', borderRadius: '20px' }}>
                <form className={styles.formGrid} onSubmit={(e) => { e.preventDefault(); predict(); }}>
                    {formConfig.map((field) => (
                        <div key={field.name} className={styles.formGroup}>
                            <label className={styles.label}>{field.label}</label>
                            {field.type === 'select' ? (
                                <select
                                    className={styles.select}
                                    onChange={(e) => handleChange(field.name, e.target.value)}
                                // defaultValue={field.options[0].val}
                                >
                                    <option value="">Select...</option>
                                    {field.options?.map((opt: any) => (
                                        <option key={opt.val} value={opt.val}>{opt.label}</option>
                                    ))}
                                </select>
                            ) : (
                                <input
                                    type={field.type}
                                    step={field.step || "1"}
                                    className={styles.input}
                                    placeholder={field.placeholder}
                                    onChange={(e) => handleChange(field.name, e.target.value)}
                                />
                            )}
                        </div>
                    ))}
                    <div style={{ gridColumn: '1 / -1', marginTop: '1rem' }}>
                        <button type="submit" className={styles.analyzeBtn}>
                            <Activity size={20} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
                            Analyze Risk
                        </button>
                    </div>
                </form>
            </div>

            {result !== null && (
                <div className={styles.resultCard}>
                    <h3 className={styles.resultTitle}>Heart Disease Probability</h3>
                    <div className={`${styles.resultValue} ${result > 0.5 ? styles.highRisk : styles.lowRisk}`}>
                        {(result * 100).toFixed(1)}%
                    </div>
                    <div className={styles.resultDesc} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                        {result > 0.5 ? (
                            <>
                                <AlertTriangle size={24} color="#ef4444" />
                                <span style={{ color: '#ef4444', fontWeight: 600 }}>High Risk Detected</span>
                            </>
                        ) : (
                            <>
                                <CheckCircle size={24} color="#10b981" />
                                <span style={{ color: '#10b981', fontWeight: 600 }}>Low Risk Profile</span>
                            </>
                        )}
                    </div>
                    <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                        {result > 0.5
                            ? "This patient shows significant indicators for heart disease. Immediate clinical consultation recommended."
                            : "Patient vitals are within normal range for the tested parameters."}
                    </p>
                </div>
            )}
        </div>
    );
}
