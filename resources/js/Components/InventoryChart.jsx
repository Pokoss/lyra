import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    Filler,
    Title,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    Filler,
    Title
);

export default function InventoryChart({ className = '' }) {
    // Mock data for UI/demo only — 30 days
    const labels = Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`);

    const data = {
        labels,
        datasets: [
            {
                label: 'Stock level',
                data: labels.map((_, i) => Math.max(20, Math.round(200 - i * 3 + Math.sin(i / 3) * 10))),
                fill: true,
                backgroundColor: 'rgba(219, 39, 119, 0.08)', // subtle red/pink fill
                borderColor: 'rgba(220, 38, 38, 0.9)', // strong red
                tension: 0.3,
                pointRadius: 2,
            },
            {
                label: 'Replenishments',
                data: labels.map((_, i) => Math.round(10 + Math.abs(Math.sin(i / 4) * 20))),
                fill: false,
                borderColor: 'rgba(37, 99, 235, 0.9)', // blue
                borderDash: [6, 6],
                tension: 0.35,
                pointRadius: 0,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    boxWidth: 10,
                    padding: 12,
                },
            },
            title: {
                display: false,
            },
        },
        scales: {
            x: {
                ticks: {
                    display: false,
                },
                grid: {
                    display: false,
                },
            },
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(148,163,184,0.08)',
                },
            },
        },
    };

    return (
        <div className={"w-full h-64 sm:h-80 " + className} aria-hidden="true">
            <Line data={data} options={options} />
        </div>
    );
}
