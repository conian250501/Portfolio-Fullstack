import { Button, styled, TextField } from "@mui/material";

export const Container = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#fff",
  padding: 16,
  height: "calc(100vh - 300px)",
  overflowY: "scroll",
  borderRadius: 6,
  "::-webkit-scrollbar": {
    display: "none",
  },
  MsOverflowStyle: "none",
  scrollbarWidth: "none",
}));

export const Form = styled("form")(({ theme }) => ({
  marginTop: 16,
}));
export const InputForm = styled(TextField)(({ theme }) => ({
  ":not(:first-of-type)": {
    marginTop: 16,
  },
}));
export const InputImage = styled("input")(({ theme }) => ({}));
export const LabelImage = styled("label")(({ theme }) => ({
  display: "block",
  margin: "16px 0",
  width: "100%",
  padding: "8px 12px",
  borderRadius: 4,
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  fontSize: 14,
  fontWeight: 500,
  cursor: "pointer",
}));

export const ImgResult = styled("div")(({ theme }) => ({
  marginBottom: 16,
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
}));

export const MoreTechnologyIcon = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  marginTop: "10px",
  ".content": {
    fontSize: 12,
    fontWeight: 500,
    fontStyle: "italic",
  },
  ".icon": {
    fontSize: 24,
    color: theme.palette.primary.main,
    cursor: "pointer",
  },
}));

export const ButtonSubmit = styled(Button)(({ theme }) => ({
  width: "100%",
  marginTop: 16,
  padding: "8px 16px",
  backgroundColor: theme.palette.secondary.main,
  fontSize: 14,
  fontWeight: 600,
  textTransform: "capitalize",
  color: "#000",
  border: "2px solid #000",
  ":hover": {
    backgroundColor: theme.palette.secondary.main,
  },
}));
