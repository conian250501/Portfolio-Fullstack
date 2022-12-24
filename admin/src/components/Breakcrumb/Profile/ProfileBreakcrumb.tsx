import { Breadcrumbs, Stack, Typography } from "@mui/material";
import React from "react";
import MergeIcon from "@mui/icons-material/Merge";
import { Link } from "react-router-dom";
type Props = {};

const ProfileBreakcrumb = (props: Props) => {
  const breadcrumbs = [
    <Link to="/" key={1}>
      <Typography sx={{ fontSize: "14px", color: "#000" }}>
        Dashboard
      </Typography>
    </Link>,
    <Link to="/profile" key={2}>
      <Typography sx={{ fontSize: "14px", fontWeight: 500, color: "#000" }}>
        Profile
      </Typography>
    </Link>,
    <Typography sx={{ fontSize: "14px", fontWeight: 500 }} key={3}>
      Conian guys
    </Typography>,
  ];
  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={
          <MergeIcon
            fontSize="small"
            color="primary"
            sx={{
              transform: "rotate(90deg)",
            }}
          />
        }
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
};

export default ProfileBreakcrumb;
