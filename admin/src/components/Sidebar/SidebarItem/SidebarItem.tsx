import ForkRightIcon from "@mui/icons-material/ForkRight";
import { Box, Menu, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { LinkItem, LinkList, MenuItem } from "./sidebarItemStyles";
interface LinkTypes {
  title: string;
  url: string;
}
type Props = {
  maxSize: boolean;
  links: LinkTypes[];
  icon: React.ReactNode;
  name: string;
};

const SidebarItem = ({ maxSize, links, icon, name }: Props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLDivElement>(null);
  const open = Boolean(anchorEl);
  const handleOpenMangeProjects = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <MenuItem maxsize={maxSize}>
      <Box
        component="div"
        onClick={handleOpenMangeProjects}
        className="button_open"
      >
        {icon}
        <Typography className="content">{name}</Typography>
      </Box>
      <Menu
        sx={{
          ".MuiMenu-paper": {
            overflowY: "visible !important",
            overflowX: "visible !important",
          },

          ".MuiMenu-list": {
            position: "relative",
            padding: "8px",
            ":before": {
              position: "absolute",
              left: "-4px",
              top: "50%",
              transform: "translate(-50%,-50%)",
              content: '""',
              width: 0,
              height: 0,
              borderTop: "10px solid transparent",
              borderBottom: "10px solid transparent",
              borderRight: "10px solid #fff",
            },
          },
        }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        anchorOrigin={{
          vertical: "center",
          horizontal: maxSize ? 380 : 180,
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
      >
        <LinkList>
          {links.map((link, index) => (
            <NavLink
              to={`${link.url}`}
              key={index}
              end
              className="sidebar_link"
            >
              <LinkItem className="sidebar_link-item">
                <ForkRightIcon className="icon" />
                {link.title}
              </LinkItem>
            </NavLink>
          ))}
        </LinkList>
      </Menu>
    </MenuItem>
  );
};

export default SidebarItem;
