import { styled, Typography } from "@mui/material";

export const Container = styled("div")(({ theme }) => ({
  width: "100%",
  marginTop: 12,
}));
export const PostItem = styled("li")(({ theme }) => ({
  listStyle: "none",
  width: "100%",
  height: "fit-content",
  backgroundColor: "#fff",
  padding: 24,
  borderRadius: theme.mixins.toolbar.borderRadius,
  ":not(:first-of-type)": {
    marginTop: 12,
  },
}));
export const UserInfo = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));
export const Avatar = styled("div")(({ theme }) => ({
  width: 40,
  height: 40,
  borderRadius: "50%",
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "50%",
  },
}));
export const Info = styled("div")(({ theme }) => ({
  marginLeft: 8,
  ".name": {
    fontSize: 14,
    fontWeight: 500,
    color: theme.palette.textBody.main,
  },
  ".date": {
    fontSize: 12,
    fontWeight: 400,
    color: theme.palette.textColor.main,
  },
}));
export const Caption = styled(Typography)(({ theme }) => ({
  width: "100%",
  margin: "12px 0",
}));
export const ImagePost = styled("div")(({ theme }) => ({
  aspectRatio: 3 / 4,

  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 4,
  },
}));
export const Emotion = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "14px",
}));
export const EmotionItem = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  ".number": {
    fontSize: "16px",
    fontWeight: 500,
    marginLeft: "6px",
  },
}));

export const Icon = styled("div")(({ theme }) => ({
  width: 40,
  height: 40,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  ":hover": {
    backgroundColor: theme.palette.primary.contrastText,
    transition: theme.mixins.toolbar.transition,
  },
  ".icon": {
    width: 24,
    height: 24,
    objectFit: "cover",
    cursor: "pointer",
    transition: theme.mixins.toolbar.transition,
  },
}));

export const IconShare = styled("div")(({ theme }) => ({
  width: 40,
  height: 40,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  ":hover": {
    backgroundColor: theme.palette.primary.contrastText,
    transition: theme.mixins.toolbar.transition,
  },
  ".icon": {
    fontSize: 24,
    color: theme.palette.textColor.main,
    cursor: "pointer",
    transition: theme.mixins.toolbar.transition,
  },
}));
