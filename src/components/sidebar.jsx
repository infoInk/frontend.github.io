import React, { useState } from "react";
import {
  CssBaseline,
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

const SidebarLayout = () => {
  const [sideDockOpen, setSideDockOpen] = useState(false);

  const handleSideDockToggle = () => {
    setSideDockOpen(!sideDockOpen);
  };

  return (
    <div style={{ display: "flex" }}>
      <CssBaseline />
      <Drawer variant="persistent" anchor="left" open={sideDockOpen}>
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
      </Drawer>
      <div style={{ flexGrow: 1 }}>
        <IconButton
          onClick={handleSideDockToggle}
          edge="start"
          color="inherit"
          aria-label="toggle-sidebar"
        >
          {sideDockOpen ? <CloseIcon /> : <ViewSidebarOutlinedIcon />}
        </IconButton>
      </div>
    </div>
  );
};

export default SidebarLayout;
