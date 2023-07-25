import { Container, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import React from "react";

function Empty() {
  return (
    <div>
      <Container sx={{ my: "60px" }}>
        <svg
          width="557"
          height="258"
          viewBox="0 0 557 258"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M174 8C174 3.58172 177.582 0 182 0H510C514.418 0 518 3.58172 518 8V120H182C177.582 120 174 116.418 174 112V8Z"
            fill="#F1F1F1"
          />
          <circle cx="537.5" cy="106.5" r="15.5" fill="#F1F1F1" />
          <circle cx="15.5" cy="242.5" r="15.5" fill="#F1F1F1" />
          <path
            d="M33 147C33 142.582 36.5817 139 41 139H256C260.418 139 264 142.582 264 147V250C264 254.418 260.418 258 256 258H33V147Z"
            fill="#F1F1F1"
          />
        </svg>
        <Box sx={{ my: "20px" }}>
          <Typography>Welcome to UGChat!</Typography>
          <Typography>How may i help you today?</Typography>
          <Typography sx={{ my: "10px" }}>
            I'm here to provide you with the information you're seeking.
            <br /> So go ahead, ask away and let's start our conversation!
          </Typography>
        </Box>
        <Box sx={{ width: "855px", mx: "180px" ,display:"flex"}}>
          <TextField fullWidth label="Type here..." id="fullWidth" />
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 2.5L11 13.5"
              stroke="#7F7D83"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M22 2.5L15 22.5L11 13.5L2 9.5L22 2.5Z"
              stroke="#7F7D83"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Box>
      </Container>
    </div>
  );
}

export default Empty;
