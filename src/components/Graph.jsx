import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Graph = ({ data }) => {
  const convertedData = Object.keys(data.views).map((key) => {
    const date = new Date(key);
    const month = date.toLocaleString("en-US", { month: "short" });
    const day = date.getDate();
    return {
      date: `${month} ${day}`,
      value: data.views[key],
    };
  });

  const dataLine = {
    labels: convertedData.map((data) => data.date),
    datasets: [
      {
        label: false,
        borderColor: "#FF5403",
        data: convertedData.map((data) => data.value),
      },
    ],
  };

  return (
    <Line
      data={dataLine}
      options={{
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false, // Hide legend that shows dataset label
          },
        },
      }}
    />
  );
};

export default Graph;
