import React from "react";
import {
  Container,
  ContentItem,
  ContentList,
  Inroduced,
  Heading,
} from "./aboutStyles";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Typography } from "@mui/material";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import SchoolIcon from "@mui/icons-material/School";
import { useAppSelector } from "~/app/hooks";
import { selectProfile } from "~/featureds/profile/profileSlice";

type Props = {};

const About = (props: Props) => {
  const profileData = useAppSelector(selectProfile);
  return (
    <Container>
      <Heading>About</Heading>
      <Inroduced>{profileData?.introduce}</Inroduced>
      <ContentList>
        <ContentItem>
          <LocationOnIcon className="icon" />
          <Typography className="title">
            Live at <strong>Bien Hoa City</strong>
          </Typography>
        </ContentItem>
        <ContentItem>
          <AttachEmailIcon className="icon" />
          <Typography className="title">minhtai250501@gmail.com</Typography>
        </ContentItem>
        <ContentItem>
          <HomeRepairServiceIcon className="icon" />
          <Typography className="title">Fullstack developer</Typography>
        </ContentItem>
        <ContentItem>
          <SchoolIcon className="icon" />
          <Typography className="title">
            Studied at <strong>HCM city university of transport</strong>
          </Typography>
        </ContentItem>
      </ContentList>
    </Container>
  );
};

export default About;
