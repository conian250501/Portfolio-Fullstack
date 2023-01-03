import { Box, Grid, Typography } from "@mui/material";
import ProfileBreakcrumb from "~/components/Breakcrumb/Profile/ProfileBreakcrumb";
import SocialProfile from "~/components/Profile/Social/SocialProfile";
import About from "~/components/Profile/About";
import HeaderProfile from "~/components/Profile/HeaderProfile";
import { Container, Heading } from "./profileStyles";
import PostForm from "~/components/Profile/Post/PostCreate";
import PostList from "~/components/Profile/Post/PostList";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch } from "~/app/hooks";
import { getProfile } from "~/featureds/profile/profileActions";
type Props = {};

const Profile = (props: Props) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProfile());
  }, []);
  return (
    <Container>
      <Heading variant="h4">Profile</Heading>

      {/* Breakcrumb */}
      <Box component={"div"} sx={{ marginTop: "12px" }}>
        <ProfileBreakcrumb
          breadcrumbs={[
            <Link to="/" key={1}>
              <Typography sx={{ fontSize: "14px", color: "#000" }}>
                Dashboard
              </Typography>
            </Link>,
            <Link to="/profile" key={2}>
              <Typography
                sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}
              >
                Profile
              </Typography>
            </Link>,
            <Typography sx={{ fontSize: "14px", fontWeight: 500 }} key={3}>
              Conian guys
            </Typography>,
          ]}
        />
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
        <Grid item desktop={5} laptop={5} tablet={12} mobile={12}>
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
        <Grid item desktop={7} laptop={7} tablet={12} mobile={12}>
          <PostForm />
          <PostList />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
