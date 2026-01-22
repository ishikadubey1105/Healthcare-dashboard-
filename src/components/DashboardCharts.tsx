"use client";
import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

export const PatientFlowChart = () => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
                labels: { color: '#94a3b8' }
            },
        },
        scales: {
            y: {
                grid: { color: 'rgba(255, 255, 255, 0.05)' },
                ticks: { color: '#94a3b8' }
            },
            x: {
                grid: { display: false },
                ticks: { color: '#94a3b8' }
            }
        }
    };

    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Admissions',
                data: [45, 59, 70, 81, 56, 45, 30],
                borderColor: '#0ea5e9',
                backgroundColor: 'rgba(14, 165, 233, 0.1)',
                fill: true,
                tension: 0.4
            },
            {
                label: 'Discharges',
                data: [28, 48, 40, 19, 66, 27, 50],
                borderColor: '#10b981',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                fill: true,
                tension: 0.4
            },
        ],
    };

    return <Line options={options} data={data} />;
};

export const DepartmentChart = () => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
        },
        scales: {
            y: {
                grid: { color: 'rgba(255, 255, 255, 0.05)' },
                ticks: { color: '#94a3b8' }
            },
            x: {
                grid: { display: false },
                ticks: { color: '#94a3b8' }
            }
        }
    };

    const data = {
        labels: ['ER', 'Cardiology', 'Pediatrics', 'Neuro', 'Orthopedics'],
        datasets: [
            {
                label: 'Active Patients',
                data: [145, 89, 65, 40, 55],
                backgroundColor: [
                    '#ef4444',
                    '#0ea5e9',
                    '#10b981',
                    '#8b5cf6',
                    '#f97316',
                ],
                borderRadius: 6,
            },
        ],
    };

    return <Bar options={options} data={data} />;
}
