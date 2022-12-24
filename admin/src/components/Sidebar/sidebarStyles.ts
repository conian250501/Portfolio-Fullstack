import styled from "@emotion/styled";
import { Button, Theme } from "@mui/material";

// STYLE PROPS
export interface ThemeProps {
  theme?: Theme;
  maxsize?: boolean | string;
}
export interface LogoProps extends ThemeProps {
  fontSize: string;
  fontWeight: string;
}
export interface ContainerProps extends ThemeProps {
  openMobile: boolean;
}
export interface WrapperProps extends ThemeProps {}
export interface OpenIconProps extends ThemeProps {}
export interface BackgroundModalProps extends ThemeProps {}
export interface UserAvatarProps extends ThemeProps {}
export interface UserProfileProps extends ThemeProps {}
export interface UserInfoProps extends ThemeProps {}
export interface MenuItemProps extends ThemeProps {}
export interface MenuListProps extends ThemeProps {}
export interface ButtonLogoutProps extends ThemeProps {}

export const Container = styled("div")<ContainerProps>(
  ({ theme, maxsize, openMobile }) => ({
    position: "relative",
    width: maxsize === "true" ? "340px" : "80px",
    height: "100vh",

    display: "flex",
    alignItems: maxsize === "true" ? "start" : "center",
    justifyContent: "flex-start",
    flexDirection: "column",
    borderRight: "1px solid #ccc",
    backgroundColor: theme.palette.backgroundColor.main,
    transition: "all 0.25s linear",
    [theme.breakpoints.only("tablet")]: {
      position: openMobile ? "fixed" : "relative",
      top: 0,
      left: 0,
      zIndex: 20000,
      display: openMobile ? "flex" : "none",
      transform: openMobile ? "translateX(0)" : "translateX(-400px)",
    },
    [theme.breakpoints.only("mobile")]: {
      position: openMobile ? "fixed" : "relative",
      top: 0,
      left: openMobile ? 0 : "-400px",
      zIndex: 20000,
      width: "80%",
      display: openMobile ? "flex" : "none",
      transform: openMobile ? "translateX(0)" : "translateX(-300px)",
    },
  })
);

export const Wrapper = styled("div")<WrapperProps>(({ theme, maxsize }) => ({
  width: "100%",
  height: "100%",
  overflowY: "auto",
  overflowX: "hidden",
  padding: maxsize === "true" ? 20 : 8,
  paddingBottom: 40,
  "::-webkit-scrollbar": {
    display: "none",
  },
  MsOverflowStyle: "none",
  scrollbarWidth: "none",
}));

export const BackgroundModal = styled("div")<BackgroundModalProps>(
  ({ theme }) => ({
    position: "absolute",
    zIndex: 1000,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.4)",
    cursor: "pointer",
    [theme.breakpoints.only("desktop")]: {
      display: "none",
    },
    [theme.breakpoints.only("laptop")]: {
      display: "none",
    },
    [theme.breakpoints.only("tablet")]: {
      display: "block",
    },
    [theme.breakpoints.only("mobile")]: {
      display: "block",
    },
  })
);

export const OpenIcon = styled("div")<OpenIconProps>(({ theme }) => ({
  position: "absolute",
  top: 20,
  right: -12,
  width: 24,
  height: 24,
  borderRadius: "50%",
  background: "#fff",
  border: "1px solid #000",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  ".open_icon": {
    fontSize: "18px",
  },
  cursor: "pointer",
  zIndex: 1,
  [theme.breakpoints.only("tablet")]: {
    display: "none",
  },
  [theme.breakpoints.only("mobile")]: {
    display: "none",
  },
}));

export const Logo = styled("div")<LogoProps>(
  ({ theme, fontSize, fontWeight, maxsize }) => ({
    fontSize: fontSize ? fontSize : "16px",
    textTransform: "uppercase",
    fontWeight: fontWeight ? fontWeight : "normal",
    width: "100%",
    overflow: "hidden",
    textAlign: maxsize === "true" ? "start" : "center",
  })
);

export const UserProfile = styled("div")<UserProfileProps>(
  ({ theme, maxsize }) => ({
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: maxsize === "true" ? "flex-start" : "center",
    background: theme.palette.secondary.main,
    padding: maxsize === "true" ? 12 : 12,
    borderRadius: 6,
    border: "2px solid #000",
    marginTop: "12px",
  })
);
export const UserAvatar = styled("div")<UserAvatarProps>(
  ({ theme, maxsize }) => ({
    ".user_avatar": {
      width: maxsize === "true" ? 50 : 30,
      height: maxsize === "true" ? 50 : 30,
      borderRadius: "50%",
      objectFit: "cover",
    },
  })
);

export const UserInfo = styled("div")<UserInfoProps>(({ theme, maxsize }) => ({
  marginLeft: "10px",
  display: maxsize === "true" ? "block" : "none",
  ".name": {
    fontSize: "18px",
    fontWeight: "500",
  },
  ".role": {
    fontSize: "14px",
    fontWeight: "400",
    color: "#888",
  },
}));

export const MenuList = styled("ul")<MenuListProps>(({ theme }) => ({
  width: "100%",
  marginTop: 30,
}));
export const MenuItem = styled("li")<MenuItemProps>(({ theme, maxsize }) => ({
  marginBottom: 14,
  borderRadius: 6,
  transition: `0.25s linear`,
  "&  a": {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: maxsize === "true" ? "start" : "center",
    padding: maxsize === "true" ? "18px 0 18px 12px" : "8px",
    flexDirection: maxsize === "true" ? "row" : "column",
    color: theme.palette.textColor.main,
    borderRadius: 6,
  },
  ".content": {
    fontSize: maxsize === "true" ? 14 : 10,
    marginLeft: maxsize === "true" ? 8 : 0,
    fontWeight: 600,
  },
  ".icon": {
    color: theme.palette.textColor.main,
  },

  "&:hover": {
    backgroundColor: `rgba( 58,43,186, 0.1)`,
  },

  "a.active": {
    backgroundColor: theme.palette.primary.main,
    color: "#FFf",
    ".icon": {
      color: "#fff",
    },
    transition: `0.25s linear`,
  },
}));
export const MenuLabel = styled("p")<MenuListProps>(({ theme, maxsize }) => ({
  display: maxsize === "true" ? "block" : "none",
  fontSize: 14,
  fontWeight: "600",
  color: theme.palette.textColor.main,
  marginBottom: "6px",
}));

export const ButtonLogout = styled(Button)<ButtonLogoutProps>(
  ({ theme, maxsize }) => ({
    position: "absolute",
    left: "50%",
    transform: "translate(-50%,0%)",
    bottom: "16px",
    width: maxsize === "true" ? "90%" : "80%",
    fontSize: maxsize === "true" ? 16 : 12,
    fontWeight: "500",
  })
);
