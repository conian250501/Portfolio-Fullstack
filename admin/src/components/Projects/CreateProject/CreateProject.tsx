import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ProfileBreakcrumb from "~/components/Breakcrumb/Profile/ProfileBreakcrumb";
import { Container } from "./createProjectStyles";

type Props = {};

const CreateProject = (props: Props) => {
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
          <Link to="/project/create-project" key={2}>
            <Typography
              sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
            >
              Create Project
            </Typography>
          </Link>,
        ]}
      />
    </Container>
  );
};

export default CreateProject;
