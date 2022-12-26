import { Typography } from "@mui/material";
import React, { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import ProfileBreakcrumb from "~/components/Breakcrumb/Profile/ProfileBreakcrumb";
import { Container } from "./createTypeStyles";

type Props = {};

const CreateType = (props: Props) => {
  return (
    <Container>
      <ProfileBreakcrumb
        breadcrumbs={[
          <Typography sx={{ fontSize: "14px", fontWeight: 500 }} key={3}>
            Conian guys
          </Typography>,
          <Link to="/project/all" key={1}>
            <Typography sx={{ fontSize: "14px", color: "#000" }}>
              Projects
            </Typography>
          </Link>,
          <Link to="create-type" key={2}>
            <Typography
              sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
            >
              Create Type
            </Typography>
          </Link>,
        ]}
      />
    </Container>
  );
};

export default CreateType;
