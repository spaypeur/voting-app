'use client';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PollChart({ data }) {
  const chartData = {
    labels: data.map(item => item.label),
    datasets: [
      {
        data: data.map(item => item.votes),
        backgroundColor: [
          '#6366f1', // Indigo
          '#10b981', // Emerald
          '#f59e0b', // Amber
          '#ef4444', // Red
          '#8b5cf6', // Purple
          '#0ea5e9'  // Sky
        ],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'right',
        labels: {
          color: '#0f172a',
          font: { family: 'Inter' }
        }
      }
    },
    cutout: '65%',
    responsive: true,
    maintainAspectRatio: false
  };

  return (
    <div style={{ height: '300px' }}>
      <Doughnut data={chartData} options={options} />
    </div>
  );
}
