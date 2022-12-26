import { Grid, Typography } from "@mui/material";
import React from "react";
import { ChartIcon, Container, Content } from "./statisticStyles";
type Props = {
  title: string;
  percentage: number;
  amount: number;
  icon: React.ReactNode;
};

const Statistics: React.FC<Props> = ({ title, percentage, amount, icon }) => {
  return (
    <Grid item desktop={4} laptop={4} tablet={4} mobile={12}>
      <Container>
        <Content>
          <Typography className="title">{title}</Typography>
          <Typography className="percentage">{percentage}%</Typography>
          <Typography className="amount">
            {amount.toLocaleString("VN")}
          </Typography>
        </Content>
        <ChartIcon>{icon}</ChartIcon>
      </Container>
    </Grid>
  );
};

export default Statistics;
