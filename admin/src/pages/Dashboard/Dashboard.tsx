import { Box, Grid } from "@mui/material";
import BarChart from "~/components/Charts/BarChart";
import DonutChart from "~/components/Charts/DonutChart";
import Banner from "~/components/Dashboard/DashboardBanner";
import Statistic from "~/components/Dashboard/DashboardStatistic";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <Box component={"div"} sx={{ marginTop: "12px", padding: "12px 16px" }}>
      {/* BANNER */}
      <Banner />

      {/* STATISTIC */}
      <Statistic />
      {/* CHART */}

      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent={"space-between"}
        marginTop="6px"
      >
        <Grid item desktop={4} laptop={4} tablet={12} mobile={12}>
          <DonutChart />
        </Grid>
        <Grid item desktop={8} laptop={8} tablet={12} mobile={12}>
          <BarChart />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
