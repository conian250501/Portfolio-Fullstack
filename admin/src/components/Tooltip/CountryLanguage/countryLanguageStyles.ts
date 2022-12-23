import { styled } from "@mui/material";

export const IconCountry = styled("div")(({ theme }) => ({
  width: 40,
  height: 40,
  borderRadius: "50%",
  display: theme.mixins.toolbar.display,
  alignItems: theme.mixins.toolbar.alignItems,
  justifyContent: theme.mixins.toolbar.justifyContent,
  transition: theme.mixins.toolbar.transition,

  ".country_icon": {
    width: 24,
  },
  ":hover": {
    backgroundColor: theme.palette.primary.contrastText,

    transition: theme.mixins.toolbar.transition,
  },
}));

export const CountryList = styled("ul")(({ theme }) => ({
  position: "relative",
  listStyle: "none",
  width: 240,
  padding: 10,
}));
export const CountryItem = styled("li")(({ theme }) => ({
  display: "flex",
  padding: 8,
  borderRadius: 4,
  transitions: theme.mixins.toolbar.transition,
  cursor: "pointer",
  ":hover": {
    backgroundColor: theme.palette.primary.contrastText,
    transitions: theme.mixins.toolbar.transition,
  },
  ":not(:first-child)": {
    marginTop: 12,
  },
  ".country_icon": {
    width: 34,
  },
  ".country_name": {
    fontSize: 14,
    fontWeight: "500",
    marginLeft: 10,
    color: theme.palette.textColor.main,
  },
}));
