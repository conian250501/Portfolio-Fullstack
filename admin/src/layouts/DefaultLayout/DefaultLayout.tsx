import React from "react";

type Props = {
  children: React.ReactNode;
};

const DefaultLayout: React.FC<Props> = ({ children }) => {
  return <>{children}</>;
};

export default DefaultLayout;
