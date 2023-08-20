import React, { useState } from 'react';
import { Container, TextField, List, ListItem, ListItemText } from '@mui/material';
import Box from '@mui/material/Box';

function HomePage() {

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // This function handles the behavior when the user clicks the send button.
  const buttonHandler = () => {
    // Create a copy of the current messages array to avoid direct mutation.
    const tempData = [...messages];

    // Add the user's input as a new message to the array of messages.
    tempData.push({ sender: 'user', message: input });

    // Look for a corresponding chatbot response in the mockData based on the input trigger.
    const chatbotResponse = mockData.find(entry => entry.sender === 'UG' && entry.trigger === input);

    // If a matching chatbot response is found, add it to the array of messages.
    if (chatbotResponse) {
      tempData.push({ sender: 'UG', message: chatbotResponse.response });
    }

    // Update the state with the new array of messages and clear the input field.
    setMessages(tempData);
    setInput("");
  };



  const mockData = [
    { sender: 'user', message: 'Hello' },
    { sender: 'UG', trigger: 'Hello', response: "Hello there, How may I help you today?" },

    { sender: 'user', message: 'What do I do next after receiving my admission letter?' },
    { sender: 'UG', trigger: 'What do I do next after receiving my admission letter?', response: "Confirm Your Acceptance: Carefully read through your admission letter and follow the instructions on how to accept the admission offer. Typically, you will need to pay an acceptance fee and submit a confirmation form. The letter will provide specific details on how to proceed." }
  ];




  return (
    <Container sx={{ my: "60px", mx: "40px" }}>
      <Box>
        <List>
          {messages.map((message, index) => (
            <ListItem
              key={index}
              alignItems="flex-start"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: message.sender === 'user' ? 'flex-end' : 'flex-start',
                mb: 1,
              }}
            >
              <ListItemText
                primary={message.sender === 'user' ? 'You' : 'Chatbot'}
              />
              <span
                style={{
                  backgroundColor: message.sender === 'user' ? '#007BFF' : '#E5E5EA',
                  color: message.sender === 'user' ? 'white' : 'black',
                  borderRadius: '10px',
                  padding: '8px 20px',
                }}
              >
                {message.message}
              </span>
            </ListItem>
          ))}
        </List>
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
