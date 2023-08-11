import React, { useState } from "react";
import {
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  IconButton,
} from "@mui/material";
import ViewSidebarOutlinedIcon from "@mui/icons-material/ViewSidebarOutlined";
import SearchInput from "./search";

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
              <div style={{ padding: "10px" }}>
                <SearchInput />

              </div>
              <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "8px",
          }}
        >
          <IconButton
            onClick={handleSideDockToggle}
            color="inherit"
            aria-label="toggle-sidebar"
            sx={{
                border: "1px solid #ADACB0",
                borderRadius: "10% ",
            }}
          >
          <ViewSidebarOutlinedIcon />
          </IconButton>
        </div>
            </ListItemIcon>
          </ListItem>
          {/* Add other ListItems here */}
        </List>
        {/* View Sidebar icon in the sidebar */}
        
      </Drawer>
      <div style={{ flexGrow: 1 }}>
        {/* View Sidebar icon in the main content area */}
        <IconButton
          onClick={handleSideDockToggle}
          edge="start"
          color="inherit"
          aria-label="toggle-sidebar"
          sx={{
            border: "1px solid #ADACB0",
            borderRadius: "10%",
          }}
        >
          {sideDockOpen ? (
            <ViewSidebarOutlinedIcon />
          ) : (
            <ViewSidebarOutlinedIcon />
          )}
        </IconButton>
      </div>
    </div>
  );
};

export default SidebarLayout;
