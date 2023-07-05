import React from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = ({data}) => {


  const options = {
    maintainAspectRatio: false, // Disable aspect ratio to make the chart full width
    plugins: {
      legend: {
        display: false,
        position: "right", // Adjust the legend position as needed
      },
    },
  };

  return (
    <div style={{ width: "220px", height: "220px" }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
