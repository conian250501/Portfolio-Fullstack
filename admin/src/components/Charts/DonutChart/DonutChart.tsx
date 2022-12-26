import React from "react";

type Props = {};
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Box } from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 10],
      backgroundColor: ["rgb(0, 60, 255)", "#b7ff00", "rgb(28, 28, 27)"],
      borderColor: ["rgb(0, 60, 255)", "#b7ff00", "rgb(28, 28, 27)"],
      borderWidth: 1,
      // radius: 120,
      // #232322
    },
  ],
};
const DonutChart = (props: Props) => {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "400px",
        padding: "16px",
        background: "#fff",
        borderRadius: "6px",
      }}
    >
      <Doughnut data={data} />
    </Box>
  );
};

export default DonutChart;
