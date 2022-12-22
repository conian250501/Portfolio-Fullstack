import { createStyles, styled, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CSSProperties } from "react";

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: "100%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",

    [theme.breakpoints.only("desktop")]: {
      padding: "0 38%",
    },
    [theme.breakpoints.only("laptop")]: {
      padding: "0 32%",
    },
    [theme.breakpoints.only("tablet")]: {
      padding: "0 26%",
    },
    [theme.breakpoints.only("mobile")]: {
      padding: "0 4%",
    },
  },
}));

export const TextError = styled(Typography)(({ theme }) => ({
  color: "red",
  fontSize: 14,
}));
