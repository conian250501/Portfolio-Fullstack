import { styled, TextField } from "@mui/material";

export const Container = styled("div")(({ theme }) => ({
  width: "60%",
}));
export const Input = styled(TextField)(({ theme }) => ({
  backgroundColor: "#fff",
  border: "none",
}));

export const ResultContainer = styled("div")(({ theme }) => ({
  top: 64,
  width: "100%",
  height: "400px",
  padding: "10px",
  backgroundColor: "#fff",
  borderRadius: 4,
  marginTop: 8,
}));
