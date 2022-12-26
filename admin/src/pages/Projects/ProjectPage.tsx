import { Typography } from "@mui/material";
import { Link, Routes, Route, Outlet, useParams } from "react-router-dom";
import ProfileBreakcrumb from "~/components/Breakcrumb/Profile/ProfileBreakcrumb";
import CreateProject from "~/components/Projects/CreateProject";
import CreateType from "~/components/Projects/CreateType";

import { Container, Heading } from "./projectPageStyles";

type Props = {};

const ProjectPage = (props: Props) => {
  return (
    <Container>
      <Heading>Projects</Heading>
      <Outlet />
    </Container>
  );
};

export default ProjectPage;
