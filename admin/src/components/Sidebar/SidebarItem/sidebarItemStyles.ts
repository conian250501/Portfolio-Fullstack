import { styled, Theme } from "@mui/material";

// STYLE PROPS
interface ThemeProps {
  theme?: Theme;
  maxsize?: boolean | string;
}

interface MenuItemProps extends ThemeProps {}

export const MenuItem = styled("div")<MenuItemProps>(({ theme, maxsize }) => ({
  widtd: "100%",
  marginBottom: 14,
  borderRadius: 6,
  transition: `0.25s linear`,
  cursor: "pointer",
  ".button_open": {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: maxsize ? "start" : "center",
    padding: maxsize ? "18px 0 18px 12px" : "8px",
    flexDirection: maxsize ? "row" : "column",
    color: theme.palette.textColor.main,
    borderRadius: 6,
  },
  ".content": {
    fontSize: maxsize ? 14 : 10,
    marginLeft: maxsize ? 8 : 0,
    fontWeight: 600,
  },
  ".icon": {
    color: theme.palette.textColor.main,
  },

  "&:hover": {
    backgroundColor: `rgba( 58,43,186, 0.1)`,
  },
}));

export const LinkList = styled("div")(({ theme }) => ({
  ".sidebar_link": {
    display: "block",
    ":not(:first-of-type)": {
      marginTop: 8,
    },
  },
  ".active .sidebar_link-item": {
    background: theme.palette.primary.main,
    color: "#Fff",
    transition: theme.mixins.toolbar.transition,

    ".icon": {
      color: "#Fff",
    },
  },
}));
export const LinkItem = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  width: "100%",
  padding: "8px 12px",
  fontSize: "14px",
  fontWeight: "500",
  borderRadius: 4,

  transition: theme.mixins.toolbar.transition,
  ":hover": {
    backgroundColor: theme.palette.primary.contrastText,
  },
  ".icon": {
    fontSize: 24,
    transform: "rotate(90deg)",
    marginRight: 8,
    color: theme.palette.primary.main,
  },
}));
