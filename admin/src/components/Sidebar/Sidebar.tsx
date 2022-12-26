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
  Wrapper,
} from "./sidebarStyles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import DataObjectIcon from "@mui/icons-material/DataObject";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import AccountTreeIcon from "@mui/icons-material/AccountTree";

import { Menu, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "~/app/hooks";
import { logoutAsync } from "~/featureds/Auth/authActions";
import { closeSidebar, getOpenSidebar } from "~/featureds/Header/sidebarSlice";
import SidebarItem from "./SidebarItem";
import { getUser } from "~/featureds/Auth/authSlice";

const Sidebar: React.FC = () => {
  const dispatch = useAppDispatch();
  const [maxsize, setMaxsize] = useState(true);

  const isOpenSidebar = useAppSelector(getOpenSidebar);
  const user = useAppSelector(getUser);
  useEffect(() => {
    if (isOpenSidebar) {
      setMaxsize(true);
    }
  }, [maxsize, isOpenSidebar]);

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

        <Wrapper maxsize={`${maxsize}`}>
          <Logo fontSize="40px" fontWeight="bold" maxsize={`${maxsize}`}>
            {maxsize ? "Conian" : "C"}
          </Logo>

          <UserProfile maxsize={`${maxsize}`}>
            <Link to="/profile">
              <UserAvatar maxsize={`${maxsize}`}>
                <img
                  src={
                    user?.avatar
                      ? user.avatar
                      : "/assets/images/avatar-placeholder.png"
                  }
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
              <NavLink to="/" end className={"menu_link"}>
                <DashboardIcon className="icon" />
                <Typography className="content">Dashboard</Typography>
              </NavLink>
            </MenuItem>

            <MenuLabel maxsize={`${maxsize}`}>Management</MenuLabel>
            <MenuItem maxsize={`${maxsize}`}>
              <SidebarItem
                maxSize={maxsize}
                icon={<AccountTreeIcon className="icon" />}
                name={"Projects"}
                links={[
                  { title: "All", url: "/project/all" },
                  { title: "Create Project", url: "/project/create-project" },
                  { title: "Create Type", url: "/project/create-type" },
                ]}
              />
            </MenuItem>
            <MenuItem maxsize={`${maxsize}`}>
              <SidebarItem
                maxSize={maxsize}
                icon={<DataObjectIcon className="icon" />}
                name={"Skills"}
                links={[
                  { title: "All", url: "/skill/all" },
                  { title: "Create", url: "/skill/create" },
                ]}
              />
            </MenuItem>
            <MenuItem maxsize={`${maxsize}`}>
              <SidebarItem
                maxSize={maxsize}
                icon={<ContactEmergencyIcon className="icon" />}
                name={"Contacts"}
                links={[
                  { title: "All", url: "/contact/all" },
                  { title: "Create", url: "/contact/create" },
                ]}
              />
            </MenuItem>
          </MenuList>
        </Wrapper>
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
