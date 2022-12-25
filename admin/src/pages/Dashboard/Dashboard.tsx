import { Box } from "@mui/material";
import DashboardBanner from "~/components/Dashboard/DashboardBanner";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <Box component={"div"} sx={{ marginTop: "12px", padding: "12px 16px" }}>
      {/* BANNER */}
      <DashboardBanner />

      {/* STATISTIC */}

      {/* CHART */}
    </Box>
  );
};

export default Dashboard;
