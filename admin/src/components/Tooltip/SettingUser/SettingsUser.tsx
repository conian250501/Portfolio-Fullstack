import { Box, Popover, Tooltip, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ButtonLogout,
  EmailUser,
  InfoUser,
  MenuItem,
  MenuList,
  NameUser,
  UserAvatar,
} from "./settingsUserStyles";

type Props = {};

const SettingsUser = (props: Props) => {
  const [menuUserAnchor, setMenuUserAnchor] = useState<HTMLDivElement | null>(null);

  const [openMenuUser, setOpenMenuUser] = useState(false);

  const handleCloseMenu = () => {
    setMenuUserAnchor(null);
    setOpenMenuUser(false);
  };

  return (
    <>
      <UserAvatar
        aria-describedby={openMenuUser ? "simple-popover" : undefined}
        onClick={(e) => {
          setOpenMenuUser(!openMenuUser);
          setMenuUserAnchor(e.currentTarget);
        }}
      >
        <img src="/assets/images/avatar-placeholder.jpg" alt="" />
      </UserAvatar>
      <Popover
        PaperProps={{
          sx: {
            borderRadius: "8px",
            overflow: "visible",

            ":before": {
              content: '""',
              position: "absolute",
              top: -8,
              right: 10,
              width: 0,
              height: 0,
              borderLeft: "12px solid transparent",
              borderRight: "12px solid transparent",
              borderBottom: "12px solid #fff",
            },
          },
        }}
        id={openMenuUser ? "simple-popover" : undefined}
        open={openMenuUser}
        anchorEl={menuUserAnchor}
        onClose={handleCloseMenu}
        elevation={1}
        anchorOrigin={{
          vertical: 40,
          horizontal: 40,
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <InfoUser component={"div"}>
          <NameUser variant="h6">Conianguys</NameUser>
          <EmailUser variant="body1">coniaguys@gmail.com</EmailUser>
        </InfoUser>

        <MenuList>
          <MenuItem>
            <Link to="/profile" className="menu_link">
              Profile
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/settings" className="menu_link">
              Settings
            </Link>
          </MenuItem>
        </MenuList>

        <ButtonLogout>Logout</ButtonLogout>
      </Popover>
    </>
  );
};

export default SettingsUser;
