import { Box, styled } from "@mui/material";

export const IconNotify = styled("div")(({ theme }) => ({
  width: 40,
  height: 40,
  borderRadius: "50%",
  display: theme.mixins.toolbar.display,
  alignItems: theme.mixins.toolbar.alignItems,
  justifyContent: theme.mixins.toolbar.justifyContent,
  transition: theme.mixins.toolbar.transition,

  ":hover": {
    backgroundColor: theme.palette.primary.contrastText,
    transition: theme.mixins.toolbar.transition,
  },

  ".notify_icon": {
    fontSize: 24,
    color: theme.palette.primary.main,
  },
}));

export const NotifyContainer = styled("div")(({ theme }) => ({
  width: 300,
  height: 300,
  overflowY: "scroll",
}));

export const NotifyHeader = styled("div")(({ theme }) => ({
  padding: "8px 12px",
  borderBottom: "1px solid #ccc",
  ".title": {
    fontSize: 16,
    fontWeight: 500,
  },
  ".description": {
    fontSize: 14,
    fontWeight: 400,
    color: theme.palette.textColor.main,
  },
}));
export const NotifyBody = styled("div")(({ theme }) => ({}));
export const MenuList = styled("ul")(({ theme }) => ({
  listStyle: "none",
}));
export const MenuItem = styled("li")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  padding: "8px 12px",
  cursor: "pointer",
  ":hover": {
    backgroundColor: theme.palette.primary.contrastText,
  },
}));

export const MenuIcon = styled("div")(({ theme }) => ({
  width: 40,
  height: 40,
  borderRadius: "50%",
  backgroundColor: theme.palette.primary.contrastText,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  ".draf_icon": {
    color: theme.palette.primary.main,
  },
}));

export const NotifyContent = styled(Box)(({ theme }) => ({
  marginLeft: 12,
  ".title": {
    fontSize: 14,
    fontWeight: 500,
  },
  ".subtitle": {
    fontSize: 12,
    fontWeight: 400,
    color: theme.palette.textColor.main,
  },
  ".date": {
    fontSize: 10,
    fontWeight: 500,
    color: theme.palette.textColor.main,
  },
}));
