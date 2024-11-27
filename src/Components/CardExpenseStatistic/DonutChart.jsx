import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);

const customPlugin = {
  id: "customPlugin",
  beforeDraw(chart) {
    const { data } = chart;
    const meta = chart.getDatasetMeta(0);

    // Data sets
    const angles = data.datasets[0].data;
    const radii = data.datasets[1].data;

    let startAngle = 0;

    meta.data.forEach((arc, index) => {
      const angle = (angles[index] * (Math.PI * 2)) / 360;
      const radiusFactor = radii[index] || 1;

      arc.startAngle = startAngle;
      arc.endAngle = startAngle + angle;

      arc.outerRadius =
        chart.getDatasetMeta(0).data[0].outerRadius * radiusFactor;
      arc.innerRadius = arc.outerRadius * 0.7;

      startAngle = arc.endAngle;
    });
  },
};

Chart.register(customPlugin);

const DonutChart = () => {
  const data = {
    labels: ["DBL Bank", "BRC Bank", "ABM Bank", "MCP Bank"],
    datasets: [
      {
        data: [90, 90, 90, 90],
        backgroundColor: ["#FF75B3", "#FBC058", "#466DFF", "#2BC6C1"],
        borderWidth: 1,
        cutout: "60%",
      },
      {
        data: [1, 0.7, 0.8, 0.9],
        borderWidth: 0,
        backgroundColor: [
          "transparent",
          "transparent",
          "transparent",
          "transparent",
        ],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    maintainAspectRatio: false,
    animation: {
      duration: 0,
    },
    hover: {
      mode: null,
    },
    interaction: {
      mode: "none",
    },
  };

  return (
    <div>
      <h3 className="text-blue-900 font-bold p-5">Expense Statistics</h3>
      <div className=" w-[350px] h-[310px]">
        <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-xl">
          <div className="relative w-64 h-64">
            <Doughnut data={data} options={options} />
          </div>

          <div className="grid grid-cols-2 gap-x-8 mt-4">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <span className="w-4 h-4 bg-blue-500 rounded-full inline-block mr-2"></span>
                <span className="text-gray-500">DBL Bank</span>
              </div>
              <div className="flex items-center">
                <span className="w-4 h-4 bg-teal-400 rounded-full inline-block mr-2"></span>
                <span className="text-gray-500">ABM Bank</span>
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <span className="w-4 h-4 bg-pink-400 rounded-full inline-block mr-2"></span>
                <span className="text-gray-500">BRC Bank</span>
              </div>
              <div className="flex items-center">
                <span className="w-4 h-4 bg-yellow-400 rounded-full inline-block mr-2"></span>
                <span className="text-gray-500">MCP Bank</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonutChart;
