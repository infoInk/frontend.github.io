import React, { useEffect, useState } from "react";
import { auth } from "../firebase"; // Import your firebaseConfig file
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Popover from "@mui/material/Popover";
import SidebarLayout from "../components/sidebar";


function Nav() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleNewChatClick = () => {
    window.location.href = "/"; 
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";

  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div>
      <Box
        sx={{
          boxShadow: "0px 4px 4px -2px rgba(0, 0, 0, 0.1)",
          maxWidth: "100%",
          maxHeight: "70px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mx: "50px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

            }}
          >
            {/* <SidebarLayout /> */}

            <Button
              variant="contained"
              disableElevation
              className="button"
              sx={{
                my: "24px",
                backgroundColor: "#1751D0",
                textTransform: "none",
                height: "30px",
                width: "76px",
                whiteSpace: "nowrap",
                mx: "20x"
              }}
              onClick={handleNewChatClick}
            >
              New Chat
            </Button>
          </Box>
          <svg
            width="32"
            height="32"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleClick}
          >
            <circle cx="24" cy="24" r="24" fill="#ECECED" />
            <path
              d="M28.2994 18.3929C28.2994 20.5981 26.4767 22.3858 24.2284 22.3858C21.9801 22.3858 20.1574 20.5981 20.1574 18.3929C20.1574 16.1877 21.9801 14.4 24.2284 14.4C26.4767 14.4 28.2994 16.1877 28.2994 18.3929Z"
              fill="#7F7D83"
            />
            <path
              d="M32.4571 27.6531V30.2018C31.4844 32.1588 28.1689 33.6 24.2284 33.6C20.2879 33.6 16.9724 32.1588 16 30.2018V27.6531C16 25.7763 18.4253 23.7451 23.9687 23.7451C29.5122 23.7451 32.4571 25.7763 32.4571 27.6531Z"
              fill="#7F7D83"
            />
          </svg>
          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Box p={2}>
              <Button variant="outlined" onClick={handleLogout}>
                Logout
              </Button>
            </Box>
          </Popover>
        </Box>
      </Box>
    </div>
  );
}

export default Nav;
