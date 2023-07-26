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
  console.log('avgData');
  console.log(avgData);
  const likeList =
    avgData.length === 0 ? [] : avgData.map((item) => item.personality_name);
  const avgList = avgData.length === 0 ? [] : avgData.map((item) => item.avg);
  const data = {
    labels:
      avgData.length === 0 ? [] : avgData.map((item) => item.personality_name),
    datasets: [
      {
        label: '인기도',
        data:
          avgData.length === 0
            ? []
            : avgData.map((item) => {
                if (item.avg < 0) {
                  return 0;
                }
                return item.avg;
              }),
        // backgroundColor: [
        //   'rgba(255, 99, 132, 0.2)',

        //   'rgba(255, 205, 86, 0.2)',
        //   'rgba(75, 192, 192, 0.2)',
        //   'rgba(54, 162, 235, 0.2)',
        //   'rgba(153, 102, 255, 0.2)',
        // ],
        // borderColor: [
        //   'rgb(255, 99, 132)',
        //   'rgb(255, 205, 86)',
        //   'rgb(75, 192, 192)',
        //   'rgb(54, 162, 235)',
        //   'rgb(153, 102, 255)',
        // ],
        // borderWidth: 1,
        backgroundColor: '#C8A6D4',
      },
    ],
  };
  return <Bar options={options} data={data} width="100%" height="100%" />;
}
