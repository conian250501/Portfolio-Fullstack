import { styled, Typography } from "@mui/material";

export const CellId = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: "500",
}));

export const CellName = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  fontWeight: "600",
}));
export const CellCreateAt = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: "400",
  color: theme.palette.textColor.main,
}));
export const CellEditIcon = styled("div")(({ theme }) => ({
  ".icon": {
    fontSize: "20px",
    cursor: "pointer",
  },
}));
export const CellDeleteIcon = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "30px",
  height: "20px",
  borderRadius: 2,
  background: theme.palette.primary.main,
  ".icon": {
    fontSize: "18px",
    cursor: "pointer",
    color: "#fff",
  },
}));
