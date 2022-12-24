import { styled } from "@mui/material";

export const Container = styled("div")(({ theme }) => ({
  width: "100%",
  height: "fit-content",
  backgroundColor: "#fff",
  borderRadius: theme.mixins.toolbar.borderRadius,
  padding: 16,
}));
export const SocialList = styled("div")(({ theme }) => ({}));
export const SocialItem = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",

  ":not(first-children)": {
    marginTop: 12,
  },

  ".link": {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: 400,
    wordBreak: "break-all",
    color: theme.palette.textBody.main,
    transition: theme.mixins.toolbar.transition,
  },

  [theme.breakpoints.only("mobile")]: {
    ".link": {
      fontSize: 12,
    },
    ".icon": {
      fontSize: 14,
    },
  },
}));
