import { Button, Input, styled } from "@mui/material";

export const Container = styled("div")(({ theme }) => ({
  width: "100%",
  height: "fit-content",
  backgroundColor: "#fff",
  borderRadius: theme.mixins.toolbar.borderRadius,
  padding: 16,
}));

export const InputCaption = styled("textarea")(({ theme }) => ({
  width: "100%",
  height: "180px",
  border: `1px solid #ccc`,
  borderRadius: `calc(${theme.mixins.toolbar.borderRadius} / 2)`,
  padding: 12,
  fontSize: 16,
  fontWeight: 500,
  ":focus": {
    outline: "none !important",
    border: `1px solid #ccc !important`,
  },
}));
export const InputImage = styled("input")(({ theme }) => ({}));
export const LabelInputImage = styled("label")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start ",
  padding: "6px 10px",
  background: theme.palette.primary.contrastText,
  borderRadius: 30,
  cursor: "pointer",
  ".icon": {
    fontSize: 20,
    color: theme.palette.primary.main,
  },
  ".content": {
    fontSize: 14,
    fontWeight: "500",
    marginLeft: 6,
  },
}));

export const ButtonSubmit = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  fontSize: 14,
  fontWeight: 500,
  borderRadius: theme.mixins.toolbar.borderRadius,
  ":hover": {
    backgroundColor: theme.palette.primary.main,
    boxShadow: "4px 4px 1px rgba(0, 0, 0, 1)",
  },
}));
