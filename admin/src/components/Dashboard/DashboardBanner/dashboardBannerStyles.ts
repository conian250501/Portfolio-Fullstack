import { styled } from "@mui/material";

export const Container = styled("div")(({ theme }) => ({}));
export const Banner = styled("div")(({ theme }) => ({
  position: "relative",
  paddingBottom: "50.25%",
  img: {
    position: "absolute",
    left: "0",
    top: "0",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "6px",
  },
}));
export const Content = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "10%",
  left: "5%",
  textShadow: "2px 2px 2px rgba(0,0,0,1)",
  ".title": {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },
  ".name": {
    fontSize: 30,
    fontWeight: "500",
    color: "#fff",
  },
  ".description": {
    fontSize: 16,
    fontWeight: "500",
    color: "#fff",
    width: "80%",
  },
  [theme.breakpoints.only("laptop")]: {
    ".title": {
      fontSize: 26,
    },
    ".name": {
      fontSize: 26,
    },
    ".description": {
      fontSize: 14,

      width: "90%",
    },
  },
  [theme.breakpoints.only("tablet")]: {
    ".title": {
      fontSize: 24,
    },
    ".name": {
      fontSize: 24,
    },
    ".description": {
      fontSize: 14,

      width: "90%",
    },
  },
  [theme.breakpoints.only("mobile")]: {
    top: "4%",
    left: "4%",
    ".title": {
      fontSize: 18,
    },
    ".name": {
      fontSize: 18,
    },
    ".description": {
      fontSize: 10,

      width: "90%",
    },
  },
}));
