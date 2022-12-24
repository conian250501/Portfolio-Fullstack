import { Box, Grid } from "@mui/material";
import ProfileBreakcrumb from "~/components/Breakcrumb/Profile/ProfileBreakcrumb";
import SocialProfile from "~/components/Profile/Social/SocialProfile";
import About from "~/components/Profile/About";
import HeaderProfile from "~/components/Profile/HeaderProfile";
import { Container, Heading } from "./profileStyles";
type Props = {};

const Profile = (props: Props) => {
  return (
    <Container>
      <Heading variant="h4">Profile</Heading>

      {/* Breakcrumb */}
      <Box component={"div"} sx={{ marginTop: "12px" }}>
        <ProfileBreakcrumb />
      </Box>

      {/* Header Profile */}
      <Box
        component="div"
        sx={{
          marginTop: "12px",
        }}
      >
        <HeaderProfile />
      </Box>

      {/* ABOUT AND SOCIAL */}
      <Grid
        container
        sx={{
          marginTop: "18px",
        }}
        spacing={1.5}
      >
        <Grid item desktop={6} laptop={6} tablet={12} mobile={12}>
          <Box>
            <About />
          </Box>
          <Box
            sx={{
              marginTop: "12px",
            }}
          >
            <SocialProfile />
          </Box>
        </Grid>
        <Grid item desktop={6} laptop={6} tablet={12} mobile={12}>
          {/* <SocialProfile /> */}
          post
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
