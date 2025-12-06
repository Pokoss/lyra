import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
    Title,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend, Title);

export default function AgingChart({ heightClass = 'h-64 sm:h-72' }) {
    const labels = ['0–30', '31–60', '61–90', '>90'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Aging (days)',
                data: [30, 12, 6, 2],
                backgroundColor: ['#ef4444', '#f59e0b', '#3b82f6', '#9ca3af'],
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
            <Bar data={data} options={options} />
        </div>
    );
}
