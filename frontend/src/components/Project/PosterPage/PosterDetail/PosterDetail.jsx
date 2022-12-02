import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../../../../data/PosterData";

const styles = {
  container: {
    width: 400,
    height: 400,
  },
};
export const PosterDetail = () => {
  const { posterId } = useParams();

  const poster = data.find((poster) => poster.id === posterId);
  console.log(poster);
  const { title, image } = poster;

  return (
    <div className="posterDetail" style={styles.container}>
      <h1>{title}</h1>
      <img src={image} alt="" style={{ width: "100%", height: "100%" }} />
    </div>
  );
};
