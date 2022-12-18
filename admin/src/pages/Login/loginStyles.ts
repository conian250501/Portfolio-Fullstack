import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles: any = makeStyles((theme: Theme) => ({
  container: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "0 38%",

    [theme.breakpoints.only("desktop")]: {
      padding: "0 38%",
    },
    [theme.breakpoints.only("laptop")]: {
      padding: "0 30%",
    },
    [theme.breakpoints.only("tablet")]: {
      padding: "0 26%",
    },
    [theme.breakpoints.only("mobile")]: {
      padding: "0 4%",
    },
  },
}));
