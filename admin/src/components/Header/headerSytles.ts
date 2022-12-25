import { styled } from "@mui/material";

export const Container = styled("header")(({ theme }) => ({
  position: "sticky",
  top: 0,
  left: 0,
  right: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  boxShadow: theme.mixins.toolbar.boxShadow,
  padding: "10px 12px",
  zIndex: 1,
}));
export const IconSearch = styled("div")(({ theme }) => ({
  width: 40,
  height: 40,
  borderRadius: "50%",
  display: theme.mixins.toolbar.display,
  alignItems: theme.mixins.toolbar.alignItems,
  justifyContent: theme.mixins.toolbar.justifyContent,
  cursor: "pointer",
  transition: "all 0.45s linear",
  ".search_icon": {
    color: theme.palette.textColor.main,
  },
  ":hover": {
    backgroundColor: theme.palette.primary.contrastText,
    transition: "all 0.45s linear",
    transform: "rotate(360deg)",
  },
}));
export const IconMenuBar = styled("div")(({ theme }) => ({
  cursor: "pointer",
  width: 40,
  height: 40,
  borderRadius: "50%",
  alignItems: "center",
  justifyContent: "center",
  transition: theme.mixins.toolbar.transition,
  ":hover": {
    backgroundColor: theme.palette.primary.contrastText,
    transition: theme.mixins.toolbar.transition,
  },
  ".menubar_icon": {
    fontSize: 30,
    color: theme.palette.textColor.main,
  },
  [theme.breakpoints.only("desktop")]: {
    display: "none",
  },
  [theme.breakpoints.only("laptop")]: {
    display: "none",
  },
  [theme.breakpoints.only("tablet")]: {
    display: "flex",
    marginRight: 16,
  },
  [theme.breakpoints.only("mobile")]: {
    display: "flex",
    marginRight: 16,
  },
}));
export const SectionRight = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const SectionLeft = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const SectionRightItem = styled("li")(({ theme }) => ({
  listStyle: "none",
  cursor: "pointer",
  ":not(:last-child)": {
    marginRight: 18,
  },
}));
