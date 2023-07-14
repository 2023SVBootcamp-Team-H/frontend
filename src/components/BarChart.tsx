import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as const,
    },
    title: {
      display: false,
      text: '인기도 통계',
    },
  },
};
const labels = ['할머니', '선생님', '부모님', '중2', '친구'];

type BarChartPropsType = {
  test: number[];
};

export function BarChart({ test }: BarChartPropsType) {
  const data = {
    labels,
    datasets: [
      {
        label: '인기도',
        data: test,
        backgroundColor: '#C8A6D4',
      },
    ],
  };
  return <Bar options={options} data={data} width="100%" height="100%" />;
}
