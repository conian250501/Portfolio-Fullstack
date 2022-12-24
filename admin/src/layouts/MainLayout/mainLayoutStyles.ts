import { styled } from "@mui/material";

export const SectionRight = styled("div")(({ theme }) => ({
  position: "relative",
  fontFamily: theme.mixins.toolbar.fontFamily,
  backgroundColor: theme.palette.backgroundColor.main,
  height: "100vh",
  flex: 1,
  overflowY: "scroll",
  overflowX: "hidden",
}));
export const SectionLeft = styled("div")(({ theme }) => ({}));
