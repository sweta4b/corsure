import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  const labels = ["1-10 Aug", "11-20 Aug", "21-30 Aug", "1-10 Sep"];

  const dataValues = [15, 10, 30, 40];
  const backgroundColors = dataValues.map(value => (value <= 10 ? "#eba8f78e" : "#9c27b0"));

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Performance",
        backgroundColor:backgroundColors,
        borderRadius: 10,
        barThickness:40,
        data: dataValues,
      },
    ],
  };

  return (
    <div >
      <Bar data={data} style={{ backgroundColor: "rgb(240, 248, 248)", width: "100%", height:'fit-content', padding: "5px", borderRadius: "20px" }}/>
    </div>
  );
};

export default BarChart;
