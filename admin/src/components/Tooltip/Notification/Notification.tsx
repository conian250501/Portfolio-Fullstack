import React, { useState } from "react";
import {
  IconNotify,
  MenuIcon,
  MenuItem,
  MenuList,
  NotifyBody,
  NotifyContainer,
  NotifyContent,
  NotifyHeader,
} from "./notificationStyles";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Box, Popover, Typography } from "@mui/material";
import DraftsIcon from "@mui/icons-material/Drafts";
type Props = {};

const Notification = (props: Props) => {
  const [notifyAnchor, setNotifyAnchor] = useState<HTMLDivElement | null>(null);

  const [openNotify, setOpenNotify] = useState(false);

  const handleCloseNotify = () => {
    setNotifyAnchor(null);
    setOpenNotify(false);
  };
  const data = new Array(10).fill(null);
  return (
    <IconNotify
      aria-describedby={openNotify ? "simple-popover" : undefined}
      onClick={(e) => {
        setOpenNotify(!openNotify);
        setNotifyAnchor(e.currentTarget);
      }}
    >
      <NotificationsIcon className="notify_icon" />
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
        id={openNotify ? "simple-popover" : undefined}
        open={openNotify}
        anchorEl={notifyAnchor}
        onClose={handleCloseNotify}
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
        <NotifyContainer>
          <NotifyHeader>
            <Typography className="title"> Notifications</Typography>
            <Typography className="description">
              You have 2 unread messages
            </Typography>
          </NotifyHeader>
          <NotifyBody>
            <MenuList>
              {data.map((item, index) => (
                <MenuItem key={index}>
                  <MenuIcon>
                    <DraftsIcon className="draf_icon" />
                  </MenuIcon>
                  <NotifyContent component="div">
                    <Typography variant="h6" className="title">
                      You have new email
                    </Typography>
                    <Typography className="subtitle">Emails</Typography>
                    <Typography className="date">3 days ago</Typography>
                  </NotifyContent>
                </MenuItem>
              ))}
            </MenuList>
          </NotifyBody>
        </NotifyContainer>
      </Popover>
    </IconNotify>
  );
};

export default Notification;
