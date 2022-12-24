import { styled } from "@mui/material";

export const Container = styled("div")(({ theme }) => ({
  position: "relative",
  paddingBottom: "40.25%",
  width: "100%",
  [theme.breakpoints.only("mobile")]: {
    paddingBottom: "60.25%",
  },
  //   boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"
}));
export const ImageCover = styled("div")(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  height: "100%",
  borderRadius: 6,
  boxShadow: theme.mixins.toolbar.boxShadow,
  cursor: "pointer",
  overflow: "hidden",
  ":before": {
    content: '""',
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 6,
    transition: theme.mixins.toolbar.transition,
  },

  [theme.breakpoints.only("mobile")]: {
    ":before": {
      height: 40,
    },
  },
}));
export const UserInfo = styled("div")(({ theme }) => ({
  position: "absolute",
  bottom: 24,
  left: 24,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.only("mobile")]: {
    left: 12,
  },
}));
export const Avatar = styled("div")(({ theme }) => ({
  width: 150,
  height: 150,
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "50%",
  },
  [theme.breakpoints.only("mobile")]: {
    width: 90,
    height: 90,
  },
}));
export const Info = styled("div")(({ theme }) => ({
  marginLeft: 20,
  color: "white",
  textShadow: "0 0 2px rgba(0,0,0,0.5)",
  ".name": {
    fontSize: 24,
    fontWeight: 700,
  },
  ".role": {
    fontSize: 16,
    fontWeight: 400,
  },
  [theme.breakpoints.only("mobile")]: {
    ".name": {
      fontSize: 18,
    },
    ".role": {
      fontSize: 12,
    },
  },
}));
