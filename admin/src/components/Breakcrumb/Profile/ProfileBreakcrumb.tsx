import { Breadcrumbs, Stack, Typography } from "@mui/material";
import React from "react";
import MergeIcon from "@mui/icons-material/Merge";
import { Link } from "react-router-dom";

type Props = {
  breadcrumbs: React.ReactNode[];
};

const ProfileBreakcrumb = ({ breadcrumbs }: Props) => {
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
