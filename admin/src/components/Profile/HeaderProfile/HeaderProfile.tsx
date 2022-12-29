import { Box, Typography } from "@mui/material";
import React from "react";
import { useAppSelector } from "~/app/hooks";
import { getUser } from "~/featureds/auth/authSlice";
import {
  Avatar,
  Container,
  ImageCover,
  Info,
  UserInfo,
} from "./headerProfileStyles";

type Props = {};

const HeaderProfile = (props: Props) => {
  const user = useAppSelector(getUser);
  return (
    <Container>
      <ImageCover>
        <img
          src="https://images.unsplash.com/photo-1501947248335-9b511c0cb5c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </ImageCover>
      <UserInfo>
        <Avatar>
          <img
            src={
              user?.avatar
                ? user.avatar
                : "/assets/images/avatar-placeholder.png"
            }
            alt=""
          />
        </Avatar>
        <Info>
          <Typography className="name">Minh Tai</Typography>
          <Typography className="role">Web developer</Typography>
        </Info>
      </UserInfo>
    </Container>
  );
};

export default HeaderProfile;
