import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, List, ListItem, ListItemText, useTheme, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';

function HomePage() {

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const buttonHandler = () => {
    const tempData = [...messages];
    tempData.push(input);
    setMessages(tempData);
    setInput("");

  };

  const mockData = [
    { sender: 'user', message: 'Hello' },
    { sender: 'UG', message: "Hello there, How may I help you today?" },

    { sender: 'user', message: 'What do I do next after receiving my admission letter?' },
    { sender: 'UG', message: "Confirm Your Acceptance: Carefully read through your admission letter and follow the instructions on how to accept the admission offer. Typically, you will need to pay an acceptance fee and submit a confirmation form. The letter will provide specific details on how to proceed." }
  ]



  return (
    <Container sx={{ my: "60px", mx: "40px" }}>
      <Box>
        {
          messages.length ? (
            <ul>
              {messages.map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </ul>
          ) : null}
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          borderTop: "1px solid #DCDCDE",
          pt: "20px",
          mt: "20px",
        }}
      >
        <TextField
          fullWidth
          label="Type here..."
          id="fullWidth"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          sx={{
            mb: "0px",
            width: "855px",
            mr: "20px",
            ml: "160px",
          }}
        />
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={buttonHandler}
        >
          <path
            d="M22 2.5L11 13.5"
            stroke="#7F7D83"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 2.5L15 22.5L11 13.5L2 9.5L22 2.5Z"
            stroke="#7F7D83"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Box>
    </Container>
  );
};

export default HomePage;
