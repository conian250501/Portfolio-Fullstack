import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ProfileBreakcrumb from "~/components/Breakcrumb/Profile/ProfileBreakcrumb";
import TableProjects from "../../Tables/TableProjects/TableProjects";
import { ButtonNewType, Container } from "./listStyles";

type Props = {};

const ProjectList = (props: Props) => {
  return (
    <Container>
      <Box
        component="div"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
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
          ]}
        />
        <ButtonNewType>
          <Link to="/project/create-project">Add new Project</Link>
        </ButtonNewType>
      </Box>
      <TableProjects />
    </Container>
  );
};

export default ProjectList;
