import { Box, Popover, Tooltip, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from "~/app/hooks";
import { getUser } from "~/featureds/Auth/authSlice";
import {
  ButtonLogout,
  EmailUser,
  InfoUser,
  MenuItem,
  MenuList,
  NameUser,
  SettingLink,
  UserAvatar,
} from "./settingsUserStyles";

type Props = {};

const SettingsUser = (props: Props) => {
  const [menuUserAnchor, setMenuUserAnchor] = useState<HTMLDivElement | null>(
    null
  );
  const [settingAnchor, setSettingAnchor] = useState<HTMLDivElement | null>(
    null
  );

  const [openMenuUser, setOpenMenuUser] = useState(false);
  const [openMenuSetting, setOpenMenuSetting] = useState(false);

  const user = useAppSelector(getUser);

  const handleCloseMenu = () => {
    setMenuUserAnchor(null);
    setOpenMenuUser(false);
  };

  const handleCloseMenuSetting = () => {
    setSettingAnchor(null);
    setOpenMenuSetting(false);
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
        <img
          src={
            user?.avatar ? user.avatar : "/assets/images/avatar-placeholder.png"
          }
          alt=""
        />
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
            <div
              className="menu_link"
              onClick={(e) => {
                setSettingAnchor(e.currentTarget);
                setOpenMenuSetting(true);
              }}
            >
              Settings
            </div>
            {/* SETTING POPOVER */}
            <Popover
              PaperProps={{
                sx: {
                  borderRadius: "8px",
                  overflow: "visible",
                  padding: 1.4,
                  ":before": {
                    content: '""',
                    position: "absolute",
                    top: "50%",
                    transform: "translate(0,-50%)",
                    right: -10,
                    width: 0,
                    height: 0,
                    borderTop: "12px solid transparent",
                    borderBottom: "12px solid transparent",
                    borderLeft: "12px solid #fff",
                  },
                },
              }}
              id={openMenuSetting ? "simple-popover" : undefined}
              open={openMenuSetting}
              anchorEl={settingAnchor}
              onClose={handleCloseMenuSetting}
              elevation={1}
              anchorOrigin={{
                vertical: "center",
                horizontal: -210,
              }}
              transformOrigin={{
                vertical: "center",
                horizontal: "left",
              }}
            >
              <NavLink to="/update-profile">
                <SettingLink>Update profile</SettingLink>
              </NavLink>
              <NavLink to="/change-password">
                <SettingLink>Change password</SettingLink>
              </NavLink>
            </Popover>
          </MenuItem>
        </MenuList>

        <ButtonLogout>Logout</ButtonLogout>
      </Popover>
    </>
  );
};

export default SettingsUser;
