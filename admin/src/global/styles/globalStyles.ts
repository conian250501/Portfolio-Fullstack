import { styled, Theme } from "@mui/material";
type ContainerProps = {
  theme?: Theme;
};
export const Container = styled("div")<ContainerProps>(({ theme }) => ({
  position: "relative",
  fontFamily: theme.mixins.toolbar.fontFamily,
  backgroundColor: theme.palette.backgroundColor.main,
  height: "100vh",
  flex: 1,
  overflowY: "scroll",
  padding: "16px",
}));
