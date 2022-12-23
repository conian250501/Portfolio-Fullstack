import React, { useEffect, useState } from "react";
import {
  BackgroundModal,
  ButtonLogout,
  Container,
  Logo,
  MenuItem,
  MenuLabel,
  MenuList,
  OpenIcon,
  UserAvatar,
  UserInfo,
  UserProfile,
} from "./sidebarStyles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import DataObjectIcon from "@mui/icons-material/DataObject";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import { Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { logoutAsync } from "../../featureds/Auth/authActions";
import {
  closeSidebar,
  getOpenSidebar,
} from "../../featureds/Header/sidebarSlice";

const Sidebar: React.FC = () => {
  const [maxsize, setMaxsize] = useState(true);
  const dispatch = useAppDispatch();
  const isOpenSidebar = useAppSelector(getOpenSidebar);

  const handleLogout = () => {
    dispatch(logoutAsync());
  };
  const handleCloseSidebar = () => {
    dispatch(closeSidebar(false));
  };

  return (
    <>
      {isOpenSidebar && <BackgroundModal onClick={handleCloseSidebar} />}
      <Container maxsize={`${maxsize}`} openMobile={isOpenSidebar}>
        <OpenIcon onClick={() => setMaxsize(!maxsize)}>
          <ChevronLeftIcon className="open_icon" />
        </OpenIcon>
        <Logo fontSize="40px" fontWeight="bold" maxsize={`${maxsize}`}>
          {maxsize ? "Conian" : "C"}
        </Logo>

        <UserProfile maxsize={`${maxsize}`}>
          <Link to="/profile">
            <UserAvatar maxsize={`${maxsize}`}>
              <img
                src="/assets/images/avatar-placeholder.jpg"
                alt=""
                className="user_avatar"
              />
            </UserAvatar>
          </Link>

          <UserInfo maxsize={`${maxsize}`}>
            <h1 className="name">Minh Tai</h1>
            <p className="role">Admin</p>
          </UserInfo>
        </UserProfile>

        <MenuList>
          <MenuLabel maxsize={`${maxsize}`}>General</MenuLabel>
          <MenuItem maxsize={`${maxsize}`}>
            <NavLink to="/" end>
              <DashboardIcon className="icon" />
              <Typography className="content">Dashboard</Typography>
            </NavLink>
          </MenuItem>

          <MenuLabel maxsize={`${maxsize}`}>Management</MenuLabel>
          <MenuItem maxsize={`${maxsize}`}>
            <NavLink to="/projects">
              <AccountTreeIcon className="icon" />
              <Typography className="content">Projects</Typography>
            </NavLink>
          </MenuItem>
          <MenuItem maxsize={`${maxsize}`}>
            <NavLink to="/skills">
              <DataObjectIcon className="icon" />
              <Typography className="content">Skils</Typography>
            </NavLink>
          </MenuItem>
          <MenuItem maxsize={`${maxsize}`}>
            <NavLink to="/contacts">
              <ContactEmergencyIcon className="icon" />
              <Typography className="content">Contacts</Typography>
            </NavLink>
          </MenuItem>
        </MenuList>

        <ButtonLogout
          variant="contained"
          fullWidth
          color="error"
          maxsize={`${maxsize}`}
          onClick={handleLogout}
        >
          Logout
        </ButtonLogout>
      </Container>
    </>
  );
};

export default Sidebar;
