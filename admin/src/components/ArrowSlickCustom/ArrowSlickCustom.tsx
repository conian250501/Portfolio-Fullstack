import React from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <KeyboardArrowRightIcon
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        top: "24px",
        right: "12px",
        fill: "#fff",
        zIndex: 1,
        fontSize: "30px",
      }}
      onClick={onClick}
    />
  );
}

export function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <KeyboardArrowLeftIcon
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        top: "24px",
        left: "80%",
        fill: "#fff",
        zIndex: 1,
        fontSize: "30px",
      }}
      onClick={onClick}
    />
  );
}
