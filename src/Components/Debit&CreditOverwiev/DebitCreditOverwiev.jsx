import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DebitCreditOverwiev = () => {
  const data = {
    labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Debit",
        data: [4560, 3200, 4000, 5800, 5200, 3400, 4900],
        backgroundColor: "#0056FF", // Mavi renk: Debit
        barThickness: 30, // Çubuk genişliği
        borderRadius: 50, // Çubuk köşeleri yuvarlak
      },
      {
        label: "Credit",
        data: [3760, 2220, 3200, 4300, 3700, 4800, 4000],
        backgroundColor: "#FFA300", // Turuncu renk: Credit
        barThickness: 30,
        borderRadius: 50,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "#4A4A4A",
          boxWidth: 15,
          padding: 20,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // X ekseninde grid çizgileri yok
        },
        ticks: {
          color: "#5A5A5A",
          font: {
            size: 14,
          },
        },
      },
      y: {
        display: false, // Y ekseni tamamen kapalı
      },
    },
  };

  return (
    <div >
      <h3 className="p-5 text-blue-900 font-bold">Debit & Credit Overwiev</h3>
      <div className="bg-white rounded-2xl h-[364px] w-[730px]">
        <div className="flex justify-between item-center p-5">
          <div className="flex justify-center text-lg text-gray-600  gap-2 ">
            <span className="font-semibold">$7,560</span>
            &nbsp;Debited &<span className="font-semibold"> $5,420 </span>{" "}
            Credited in this Week
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              <span className="ml-2 text-gray-600">Debit</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <span className="ml-2 text-gray-600">Credit</span>
            </div>
          </div>
        </div>
        <div className="relative h-[300px] p-3">
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};
export default DebitCreditOverwiev;
