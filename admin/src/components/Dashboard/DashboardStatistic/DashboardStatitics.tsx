import { Grid } from "@mui/material";
import React from "react";
import Statistics from "~/components/Statistics";
import TimelineIcon from "@mui/icons-material/Timeline";
import BarChartIcon from "@mui/icons-material/BarChart";
import WaterfallChartIcon from "@mui/icons-material/WaterfallChart";
type Props = {};

const DashboardStatitics = (props: Props) => {
  return (
    <Grid container spacing={2} sx={{ marginTop: "6px" }}>
      <Statistics
        title={"Projects"}
        percentage={20}
        amount={1440}
        icon={<TimelineIcon className="icon" />}
      />
      <Statistics
        title={"SKills"}
        percentage={20}
        amount={5000000}
        icon={<BarChartIcon className="icon" />}
      />
      <Statistics
        title={"Contacts"}
        percentage={20}
        amount={14040404}
        icon={<WaterfallChartIcon className="icon" />}
      />
    </Grid>
  );
};

export default DashboardStatitics;
