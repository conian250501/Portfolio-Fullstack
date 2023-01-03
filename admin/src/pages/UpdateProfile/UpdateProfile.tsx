import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ProfileBreakcrumb from "~/components/Breakcrumb/Profile/ProfileBreakcrumb";
import FormUpdate from "~/components/Profile/FormUpdate";
import { Container, Heading } from "./updateProfileStyles";

type Props = {};

const UpdateProfile = (props: Props) => {
  return (
    <Container>
      <Heading>Profile</Heading>
      <ProfileBreakcrumb
        breadcrumbs={[
          <Typography sx={{ fontSize: "14px", fontWeight: 500 }} key={3}>
            Conian guys
          </Typography>,
          <Link to="/profile" key={1}>
            <Typography sx={{ fontSize: "14px", color: "#000" }}>
              Profile
            </Typography>
          </Link>,
          <Link to="/update-profile" key={2}>
            <Typography
              sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
            >
              Update
            </Typography>
          </Link>,
        ]}
      />
      <FormUpdate />
    </Container>
  );
};

export default UpdateProfile;
