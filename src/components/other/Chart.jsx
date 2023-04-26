import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  registerables,
} from "chart.js";

export const ChartData = () => {
  const [state, setstate] = useState([]);

  // for (let i = 0; i <=12; i++) {
  //   let randomNumber = Math.floor(Math.random() * 100);
  //   setstate(randomNumber);
  //   console.log(state);
  // }

  useEffect(() => {
    if (state.length <= 12) {
      let randomNumber = Math.floor(Math.random() * 100);
      setstate([...state, randomNumber]);
    }
  }, [state]);

  Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const barChartData = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        data: state,
        // label: "",
        borderColor: "#3333ff",
        backgroundColor: "rgba(0, 0, 255, 0.5)",
        // fill: true,
      },
    ],
  };
  Chart.register(...registerables);

  return (
    <Line
      type="line"
      width={300}
      height={70}
      options={{
        plugins: {
          legend: {
            display: false,
          },
        },

        
      }}
      data={barChartData}
    />
  );
};
