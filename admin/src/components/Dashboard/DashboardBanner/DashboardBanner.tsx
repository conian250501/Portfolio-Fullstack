import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Carousels from "../Carousels";
import { Banner, Container, Content } from "./dashboardBannerStyles";

type Props = {};

const dashboardBannerStyles = (props: Props) => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item desktop={8} laptop={8} tablet={8} mobile={12} sx={{}}>
          <Banner>
            <img
              src="https://images.unsplash.com/photo-1501947248335-9b511c0cb5c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
            <Content>
              <Typography className="title">Welcome back!</Typography>
              <Typography className="name">Minhtai</Typography>
              <Typography className="description">
                As a creative, logical thinker and skilled in graphic software
                and programming languages, I will solve your problems. Take a
                look at work below and feel free to contact me with any
                questions!
              </Typography>
            </Content>
          </Banner>
        </Grid>
        <Grid item desktop={4} laptop={4} tablet={4} mobile={12}>
          <Carousels />
        </Grid>
      </Grid>
    </Container>
  );
};

export default dashboardBannerStyles;
