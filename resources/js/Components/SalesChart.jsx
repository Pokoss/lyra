import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    Title,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, Title);

export default function SalesChart({ timeRange = '30 days', heightClass = 'h-64 sm:h-72' }) {
    const labels = Array.from({ length: 30 }, (_, i) => `${i + 1}`);

    const data = {
        labels,
        datasets: [
            {
                label: 'Daily Sales',
                data: labels.map((_, i) => Math.round(50 + Math.abs(Math.sin(i / 3) * 30) + i * 0.4)),
                borderColor: 'rgba(37, 99, 235, 0.9)',
                backgroundColor: 'rgba(37, 99, 235, 0.12)',
                tension: 0.3,
                fill: true,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: { x: { grid: { display: false } }, y: { beginAtZero: true } },
    };

    return (
        <div className={`w-full ${heightClass}`}>
            <Line data={data} options={options} />
        </div>
    );
}
