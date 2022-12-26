import { Box, styled, Typography } from "@mui/material";

export const UserAvatar = styled("div")(({ theme }) => ({
  width: 40,
  height: 40,
  img: {
    width: "90%",
    height: "90%",
    objectFit: "cover",
    borderRadius: "50%",
  },
}));

export const InfoUser = styled(Box)(({ theme }) => ({
  padding: "8px 12px",
  borderBottom: "1px solid #ccc",
}));
export const NameUser = styled(Typography)(({ theme }) => ({
  fontSize: 16,
  fontWeight: "500",
}));
export const EmailUser = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  fontWeight: "400",
  color: theme.palette.textColor.main,
}));

export const MenuList = styled("ul")(({ theme }) => ({
  padding: "8px 12px",
  borderBottom: "1px solid #ccc",
}));
export const MenuItem = styled("ul")(({ theme }) => ({
  width: "100%",

  ".menu_link": {
    display: "block",
    width: "100%",
    padding: "4px 8px",
    fontSize: 16,
    fontWeight: 500,
    color: theme.palette.textColor.main,
    borderRadius: 4,
    ":hover": {
      backgroundColor: theme.palette.primary.contrastText,
    },
  },
}));
export const ButtonLogout = styled(Typography)(({ theme }) => ({
  padding: "8px 20px",
  fontSize: 16,
  fontWeight: 500,
  color: "red",
  cursor: "pointer",
}));

export const SettingLink = styled("div")(({ theme }) => ({
  padding: "8px 12px",
  borderRadius: 4,
  ":hover": {
    backgroundColor: theme.palette.primary.contrastText,
  },
}));
