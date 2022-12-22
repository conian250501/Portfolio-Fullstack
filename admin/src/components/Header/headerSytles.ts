import { styled } from "@mui/material";

export const Container = styled("header")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));
export const IconSearch = styled("div")(({ theme }) => ({
  width: 40,
  height: 40,
  borderRadius: "50%",
  display: theme.mixins.toolbar.display,
  alignItems: theme.mixins.toolbar.alignItems,
  justifyContent: theme.mixins.toolbar.justifyContent,
  cursor: "pointer",
  transition: "all 0.45s linear",

  ":hover": {
    backgroundColor: theme.palette.primary.contrastText,

    transition: "all 0.45s linear",
    transform: "rotate(360deg)",
  },
}));
export const SectionRight = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const SectionRightItem = styled("li")(({ theme }) => ({
  listStyle: "none",
  cursor: "pointer",
  ":not(:last-child)": {
    marginRight: 18,
  },
}));
