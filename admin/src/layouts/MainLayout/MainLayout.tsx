import { Grid } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { SectionLeft, SectionRight } from "./mainLayoutStyles";

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
      <SectionLeft>
        <Sidebar />
      </SectionLeft>

      <SectionRight>
        <Header />
        {children}
      </SectionRight>
    </Grid>
  );
};

export default MainLayout;
