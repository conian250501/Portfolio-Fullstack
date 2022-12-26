import { styled } from "@mui/material";
export const Container = styled("div")(({ theme }) => ({
  width: "100%",
  height: "120px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "#fff",
  borderRadius: 6,
  padding: "0 16px",
}));
export const Content = styled("div")(({ theme }) => ({
  ".title": {
    fontSize: 16,
    fontWeight: "600",
    color: theme.palette.textBody.main,
  },
  ".percentage": {
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "italic",
    color: theme.palette.textColor.main,
  },
  ".amount": {
    fontSize: 30,
    fontWeight: "600",
    color: theme.palette.textBody.main,
    // textShadow: "1px 2px 0px rgba(0,0,0,1)",
  },
}));
export const ChartIcon = styled("div")(({ theme }) => ({
  ".icon": {
    fontSize: 60,
    color: theme.palette.primary.main,
  },
}));
