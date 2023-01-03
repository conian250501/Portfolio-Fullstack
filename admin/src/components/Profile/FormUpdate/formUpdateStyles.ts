import { Button, styled, Switch, SwitchProps, TextField } from "@mui/material";

export const Form = styled("form")(({ theme }) => ({
  marginTop: 12,
}));
export const InputForm = styled(TextField)(({ theme }) => ({
  ":not(:first-of-type)": {
    marginTop: 16,
  },
}));
export const InputImage = styled("input")(({ theme }) => ({}));
export const LabelImage = styled("label")(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 1,
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  backgroundColor: "rgba(0,0,0,0.6)",
  borderRadius: "50%",
  ".icon_upload": {
    display: "block",
    color: "#fff",
    marginBottom: 6,
  },
  color: "#fff",
  fontSize: 12,
  fontWeight: 500,
  cursor: "pointer",
  opacity: 0,
  transition: "0.2s linear",
}));
export const ImgPreview = styled("div")(({ theme }) => ({
  position: "relative",
  width: 140,
  height: 140,
  borderRadius: "50%",

  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "50%",
  },
  ":hover .label_avatar": {
    opacity: 1,
    transition: "0.2s linear",
  },
}));
export const SectionLeft = styled("div")(({ theme }) => ({
  background: "#fff",
  height: "100%",
  padding: 16,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  borderRadius: 6,
}));
export const SectionRight = styled("div")(({ theme }) => ({
  background: "#fff",
  padding: 16,
  height: "100%",
  borderRadius: 6,
}));

export const ButtonSubmit = styled(Button)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: "#fff",
  fontSize: 14,
  fontWeight: "600",
  textTransform: "capitalize",
  padding: "4px 12px",
  ":hover": {
    background: theme.palette.primary.main,
  },
}));

export const IOSSwitch = styled(Switch)(({ theme }) => ({
  width: 40,
  height: 22,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 18,
    height: 18,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));
