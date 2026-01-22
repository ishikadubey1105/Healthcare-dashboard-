# HealthPulse | Advanced Healthcare Analytics Platform

## Overview
HealthPulse is a state-of-the-art healthcare analytics dashboard designed to empower medical professionals and administrators with real-time insights, predictive modeling, and operational efficiency tools.

![Dashboard Preview](https://via.placeholder.com/800x400?text=HealthPulse+Dashboard+Preview)

## Features
- **Real-Time Patient Analytics**: Monitor patient flow, admission rates, and discharge status instantly.
- **AI-Powered Heart Disease Prediction**: Machine learning model trained on real Kaggle dataset with 84% accuracy.
- **Interactive Data Visualization**: Dynamic charts and graphs for department loads and waiting times.
- **Secure & Compliant**: Designed with HIPAA compliance standards in mind (demo version).
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices.

## Dataset
The heart disease prediction model is trained on the **UCI Heart Disease Dataset** from Kaggle:
- **Source**: [Heart Disease Prediction Dataset](https://raw.githubusercontent.com/kb22/Heart-Disease-Prediction/master/dataset.csv)
- **Features**: 13 clinical parameters (age, sex, chest pain type, blood pressure, cholesterol, etc.)
- **Target**: Binary classification (presence/absence of heart disease)
- **Size**: 303 patient records
- **Model**: Logistic Regression with StandardScaler preprocessing
- **Accuracy**: ~84% on test set

## Tech Stack
- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules with CSS Variables (Glassmorphism Design System)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Charting**: Chart.js & React-Chartjs-2

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ishikadubey1105/Healthcare-dashboard-.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Healthcare-dashboard-
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure
- `src/app`: App Router pages and layouts.
- `src/components`: Reusable UI components (Sidebar, Charts, etc.).
- `src/app/globals.css`: Global design system and theme variables.

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
MIT License
