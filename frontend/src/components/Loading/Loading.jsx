import React, { useState, useEffect } from "react";
// import ScaleLoader from "react-spinners/ScaleLoader";
import { GiNinjaStar } from "react-icons/gi";
import { LoadingContainer, LoadingIcon } from "./loadingStyles";

const Loading = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const times = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => {
      clearTimeout(times);
    };
  }, []);

  return (
    <>
      <LoadingContainer loading={loading}>
        <LoadingIcon>
          <GiNinjaStar className="icon" />
        </LoadingIcon>
      </LoadingContainer>
    </>
  );
};

export default Loading;
