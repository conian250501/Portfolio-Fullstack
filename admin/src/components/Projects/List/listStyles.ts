import { Button, styled } from "@mui/material";

export const Container = styled("div")(({ theme }) => ({}));
export const ButtonNewType = styled(Button)(({ theme }) => ({
  textTransform: "capitalize",
  padding: "8px 12px",
  background: theme.palette.secondary.main,
  border: "2px solid #000",
  color: theme.palette.textBody.main,
  fontSize: 14,
  fontWeight: "600",
  ":hover": {
    background: theme.palette.secondary.main,
  },
}));
