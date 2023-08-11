import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import CloseIcon from "@mui/icons-material/Close";
import ViewSidebarOutlinedIcon from "@mui/icons-material/ViewSidebarOutlined";

const SideDock = ({ open, onClose }) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <List>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>
      </List>
      <IconButton
        onClick={onClose}
        edge="end"
        color="inherit"
        aria-label="close"
      >
        {open ? <CloseIcon /> : <ViewSidebarOutlinedIcon />}
      </IconButton>
    </Drawer>
  );
};

export default SideDock;
