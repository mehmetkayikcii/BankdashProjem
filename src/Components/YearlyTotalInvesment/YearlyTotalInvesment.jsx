import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const YearlyTotalInvesment = () => {
    const data = {
        labels: ['2016', '2017', '2018', '2019', '2020', '2021'],
        datasets: [
          {
            label: '',
            data: [5000, 25000, 17000, 38000, 20000, 30000],
            borderColor: '#F5A623',
            borderWidth: 3,
            fill: false,
            pointBackgroundColor: '#FFFF',
            pointBorderColor: '#F5A623',
            pointRadius: 6,
            pointHoverRadius: 8,
          }, {
            label: '',
            data: [5000, 25000, 17000, 38000, 20000, 30000],
            borderColor: '#F5A623',
            borderWidth: 3,
            fill: false,
            pointBackgroundColor: '#FFFF',
            pointBorderColor: '#F5A623',
            pointRadius: 6,
            pointHoverRadius: 8,
          },
         
        ],
      };
    
      const options = {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              color: '#8F9BB3',
              font: {
                size: 14,
              },
            },
          },
          y: {
            beginAtZero: true,
            ticks: {
              color: '#8F9BB3',
              font: {
                size: 14,
              },
              callback: (value) => `$${value.toLocaleString()}`,
            },
            grid: {
              color: '#E7EDF3',
            },
          },
        },
      };
    
  return (
    <div className="">
      <h3 className="p-5 !pt-0 text-blue-900 font-bold">Yearly Total Invesment</h3>
      <div className="bg-white p-4 rounded-lg shadow-md" style={{ width: '540px', height: '282px'}}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

export default YearlyTotalInvesment;
