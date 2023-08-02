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
  plugins,
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
  elements: {
    point: {
      radius: 0,
    },
  },
  transitions: {
    show: {
      animations: {
        x: {
          from: 0,
        },
        y: {
          from: 0,
        },
      },
    },
  },
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
  scales: {
    x: {
      grid: {
        display: false,
        drawBorder: false,
        drawThicks: false,
      },
    },
    y: {
      suggestedMin: 0,
      suggestedMax: 5,
      stepSize: 1,
      grid: {
        display: false,
        drawBorder: false,
        drawThicks: false,
      },
    },
  },
};

const labels = ['할머니', '중2', 'T 친구', 'F 친구', '래퍼'];

type itemType = {
  personality_name: string;
  image_url: string;
  avg: number;
};

type BarChartPropsType = {
  avgData: itemType[];
};
// {totalData.length === 0 ? '' : totalData[0].personality_name}
export function BarChart({ avgData }: BarChartPropsType) {
  // const likeList =
  //   avgData.length === 0 ? [] : avgData.map((item) => item.personality_name);
  // const avgList = avgData.length === 0 ? [] : avgData.map((item) => item.avg);
  const data = {
    labels:
      avgData.length === 0
        ? ['', '', '', '', '']
        : avgData.map((item) => item.personality_name),
    datasets: [
      {
        // label: '인기도',
        data:
          avgData.length === 0
            ? [0, 0, 0, 0, 0]
            : avgData.map((item) => {
                if (item.avg < 0) {
                  return 0;
                }
                return item.avg;
              }),
        backgroundColor: [
          'rgba(173, 140, 199, 0.5)',
          'rgba(187, 140, 224, 0.5)',
          'rgba(224, 189, 227, 0.5)',
          'rgba(200, 166, 212, 0.5)',
          'rgba(191, 126, 192, 0.5)',
        ],
        borderColor: [
          'rgb(173, 140, 199)',
          'rgb(187, 140, 224)',
          'rgb(224, 189, 227)',
          'rgb(200, 166, 212)',
          'rgb(191, 126, 192)',
        ],
        borderWidth: 1,
        // backgroundColor: '#C8A6D4',
      },
    ],
  };
  return (
    <Bar
      options={{
        ...options,
        plugins: {
          ...options.plugins,
          legend: { ...options.plugins.legend, display: false },
        },
      }}
      data={data}
      width="100%"
      height="100%"
    />
  );
}
