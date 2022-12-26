import { styled } from "@mui/material";

export const SlideItem = styled("div")(({ theme }) => ({
  position: "relative",
  paddingBottom: "102%",
  borderRadius: 6,
  overflow: "hidden",
  cursor: "pointer",
  img: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 6,
    objectFit: "cover",
    transition: theme.mixins.toolbar.transition,
  },
  ".background_hover": {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    zIndex: 1,
    opacity: 0,
  },
  ":hover .content": {
    opacity: 1,
    transition: theme.mixins.toolbar.transition,
  },
  ":hover img": {
    transform: "scale(1.1)",
    transition: theme.mixins.toolbar.transition,
  },
  ":hover .background_hover": {
    opacity: 0.4,
  },
}));
export const Content = styled("div")(({ theme }) => ({
  position: "absolute",
  bottom: 20,
  left: 20,
  opacity: "0",
  fontSize: 20,
  fontWeight: "bold",
  color: "white",
  zIndex: 2,
}));
