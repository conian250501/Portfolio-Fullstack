import { styled, TextField } from "@mui/material";

interface ContainerProps {
  open: boolean;
}
export const Container = styled("div")<ContainerProps>(({ theme, open }) => ({
  width: "60%",
  position: "absolute",
  top: "8px",
  left: "5%",
  transform: open ? "translateY(0)" : "translateY(-100px)",
  height: open ? "auto" : 0,
  transition: theme.mixins.toolbar.transition,
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
