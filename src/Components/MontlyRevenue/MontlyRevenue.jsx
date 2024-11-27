import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);


const getRandomData = () => {
  return Array.from(
    { length: 18 },
    () => Math.floor(Math.random() * 30000) + 10000
  );
};
const MontlyRevenue = () => {
  const data = {
    labels: ["2016", "2017", "2018", "2019", "2020", "2021"], // 6 tane yıl etiketi
    datasets: [
      {
        label: "Investment",
        data: getRandomData(), 
        borderColor: "#40E0D0", 
        borderWidth: 3,
        fill: false,
        pointBackgroundColor: "#FFFFFF",
        pointBorderColor: "#40E0D0",
        pointRadius: 0, 
        pointHoverRadius: 0, 
        cubicInterpolationMode: "monotone", 
        tension: 0.4, 
      },
      {
        label: "Investment",
        data: getRandomData(), 
        borderColor: "#fff", 
        borderWidth: 3,
        fill: false,
        pointBackgroundColor: "#FFF",
        pointBorderColor: "#40E0D0",
        pointRadius: 0, 
        pointHoverRadius: 0, 
        cubicInterpolationMode: "monotone", 
        tension: 0.4, 
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
          color: "#8F9BB3",
          font: {
            size: 14,
          },
          callback: function (value, index) {
            // 6 tane yıl etiketini 18 veri noktasına yayıyoruz (her yıl için 3 nokta)
            const labelIndex = Math.floor(index / 3); // 0, 1, 2 -> 2016, 3, 4, 5 -> 2017, vs.
            return this.getLabelForValue(labelIndex);
          },
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: "#8F9BB3",
          font: {
            size: 14,
          },
          callback: (value) => `$${value.toLocaleString()}`,
        },
        grid: {
          color: "#E7EDF3",
        },
      },
    },
  };

  return (
    <div className="">
      <h3 className="p-5 !pt-0 text-blue-900 font-bold">
      Montly Revenue
      </h3>
      <div
        className="bg-white p-4 rounded-lg shadow-md"
        style={{ width: "540px" , height: '282px'}}
      >
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default MontlyRevenue;
