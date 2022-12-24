import { styled, Typography } from "@mui/material";

export const Container = styled("div")(({ theme }) => ({
  width: "100%",
  height: "fit-content",
  background: "#fff",
  borderRadius: "6px",
  padding: 16,
}));
export const Heading = styled(Typography)(({ theme }) => ({
  fontSize: 20,
  fontWeight: "bold",
  color: theme.palette.textBody.main,
}));
export const Inroduced = styled(Typography)(({ theme }) => ({
  fontSize: 16,
  fontWeight: 500,
  margin: "12px 0",
  marginTop: "6px",
  color: theme.palette.textBody.main,
}));
export const ContentList = styled("ul")(({ theme }) => ({
  marginTop: 8,
}));
export const ContentItem = styled("li")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  ":not(:first-of-type)": {
    marginTop: 12,
  },
  ".icon": {
    fontSize: 20,
    color: theme.palette.primary.main,
  },
  ".title": {
    width: 500,
    marginLeft: 8,
    wordBreak: "break-all",
    color: theme.palette.textBody.main,
  },
  [theme.breakpoints.only("mobile")]: {
    ".icon": {
      fontSize: 18,
    },
  },
}));
