import { styled, Typography } from "@mui/material";

export const Container = styled("section")(({ theme }) => ({
  height: "fit-content",
  marginTop: 12,
  padding: "12px 16px",
}));

export const Heading = styled(Typography)(({ theme }) => ({
  fontSize: 22,
  fontWeight: 600,
}));
