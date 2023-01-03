import { styled } from "@mui/material";

export const Container = styled("section")(({ theme }) => ({
  padding: theme.mixins.toolbar.padding,
}));
export const Heading = styled("section")(({ theme }) => ({
  fontSize: "22px",
  fontWeight: 600,
  marginBottom: 12,
}));
