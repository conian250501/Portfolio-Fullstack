import { Grid } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

type Props = {
  children: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <Grid
      sx={{
        display: "flex",
      }}
    >
      <Sidebar />
      {children}
    </Grid>
  );
};

export default MainLayout;
