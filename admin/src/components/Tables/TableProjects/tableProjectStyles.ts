import { styled, Typography } from "@mui/material";

export const CellId = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: "500",
  width: 60,
  overflow: "hidden",
  textOverflow: "ellipsis",
}));

export const CellName = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  fontWeight: "600",
  width: "120px",
  wordBreak: "break-all",
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

export const CellTypeName = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: "500",
}));
export const CellDescription = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: "500",
  color: theme.palette.textColor.main,
}));

export const CellImage = styled("div")(({ theme }) => ({
  position: "relative",
  padding: "56.25%",
  img: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    objectFit: "contain",
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
