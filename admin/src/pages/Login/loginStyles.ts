import { styled, TextField, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    padding: "0 38%",

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

export const InputForm = styled(TextField)(({ theme }) => ({
  width: "100%",
}));
