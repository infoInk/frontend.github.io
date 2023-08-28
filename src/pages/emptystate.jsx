import { Container, Typography, useMediaQuery, useTheme, List, ListItem, ListItemText } from "@mui/material";
import Nav from '../components/nav'
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import React, { useState } from "react";

function Empty() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [introVisible, setIntroVisible] = useState(true); // State to manage introduction visibility
  const [svgVisible, setSvgVisible] = useState(true); // State to manage SVG visibility




  const onSendButton = () => {
    if (input === "") {
      return;
    }

    let msg1 = { name: "User", message: input };
    setMessages(prevMessages => [...prevMessages, msg1]);

    fetch('https://ug-chatbot.onrender.com/predict', {
      method: 'POST',
      body: JSON.stringify({ message: input }),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(data => {
        let msg2 = { name: "Sam", message: data.answer };
        setMessages(prevMessages => [...prevMessages, msg2]);
        setInput('');
      })
      .catch(error => {
        console.error('Error:', error);
        setInput('');
      });
    setSvgVisible(false);
    setIntroVisible(false); // Hide SVG after sending a message

  };

  return (
    <div>
      <Box style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000 }}>
        <Nav />
      </Box>
      <Container sx={{ my: "80px", mx: isDesktop ? "40px" : "0px" }}>
        {svgVisible && ( // Conditionally render SVG based on svgVisible state
          <svg
            width="307"
            height="214"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M248.149 0H64.957c-8.43 0-15.265 6.835-15.265 15.266v183.191c0 8.432 6.834 15.266 15.265 15.266H248.15c8.431 0 15.266-6.834 15.266-15.266V15.266C263.415 6.835 256.58 0 248.149 0Z"
              fill="#CCDAFF"
            />
            <g filter="url(#a)">
              <path
                d="M223.723 15.266H17.633A7.633 7.633 0 0 0 10 22.899v38.165a7.633 7.633 0 0 0 7.633 7.633h206.09a7.633 7.633 0 0 0 7.633-7.633V22.899a7.633 7.633 0 0 0-7.633-7.633Z"
                fill="#fff"
              />
            </g>
            <path
              d="M115.335 27.479H75.644a4.58 4.58 0 1 0 0 9.16h39.691a4.58 4.58 0 0 0 0-9.16Z"
              fill="#CDE1FF"
            />
            <path
              d="M142.814 47.325h-67.17a4.58 4.58 0 0 0 0 9.159h67.17a4.58 4.58 0 0 0 0-9.16Z"
              fill="#CCDAFF"
            />
            <path
              d="M51.218 19.846H22.213a7.633 7.633 0 0 0-7.633 7.633v29.005a7.633 7.633 0 0 0 7.633 7.633h29.005a7.633 7.633 0 0 0 7.633-7.633V27.479a7.633 7.633 0 0 0-7.633-7.633Z"
              fill="#1751D0"
            />
            <path
              d="M33.238 46.989h3.053l.034-1.176c0-1.545.974-1.948 2.35-2.384a6.612 6.612 0 0 0 4.803-6.348 6.34 6.34 0 0 0-6.65-6.55 6.838 6.838 0 0 0-6.985 7.023H33a3.841 3.841 0 0 1 3.831-3.932 3.219 3.219 0 0 1 3.393 3.493 3.478 3.478 0 0 1-2.553 3.257l-1.108.44a4.453 4.453 0 0 0-3.359 5.004l.034 1.173Zm1.511 7.257a2.24 2.24 0 0 0 2.318-2.22 2.238 2.238 0 0 0-2.318-2.216 2.24 2.24 0 0 0-2.317 2.216 2.239 2.239 0 0 0 2.317 2.22Z"
              fill="#fff"
            />
            <g filter="url(#b)">
              <path
                d="M83.277 80.91h206.09A7.632 7.632 0 0 1 297 88.542v38.164a7.632 7.632 0 0 1-7.633 7.633H83.277a7.634 7.634 0 0 1-7.633-7.633V88.543a7.633 7.633 0 0 1 7.633-7.634Z"
                fill="#fff"
              />
            </g>
            <path
              d="M180.979 93.122h-39.692a4.58 4.58 0 0 0 0 9.16h39.692a4.58 4.58 0 0 0 0-9.16Z"
              fill="#CDE1FF"
            />
            <path
              d="M208.457 112.968h-67.17a4.58 4.58 0 1 0 0 9.16h67.17a4.58 4.58 0 1 0 0-9.16Z"
              fill="#CCDAFF"
            />
            <path
              d="M116.862 85.49H87.856a7.633 7.633 0 0 0-7.633 7.632v29.006a7.633 7.633 0 0 0 7.633 7.633h29.006a7.634 7.634 0 0 0 7.633-7.633V93.122a7.633 7.633 0 0 0-7.633-7.633Z"
              fill="#1751D0"
            />
            <path
              d="M98.882 112.632h3.053l.033-1.175c0-1.545.974-1.948 2.351-2.385a6.616 6.616 0 0 0 4.803-6.347 6.343 6.343 0 0 0-4.078-6.142 6.34 6.34 0 0 0-2.572-.407 6.84 6.84 0 0 0-6.986 7.022h3.157a3.844 3.844 0 0 1 3.832-3.933 3.217 3.217 0 0 1 3.392 3.493 3.473 3.473 0 0 1-2.552 3.258l-1.109.44a4.453 4.453 0 0 0-3.358 5.004l.034 1.172Zm1.511 7.258a2.237 2.237 0 0 0 2.317-2.22 2.224 2.224 0 0 0-.691-1.597 2.24 2.24 0 0 0-1.626-.62 2.239 2.239 0 0 0-2.318 2.217 2.243 2.243 0 0 0 .69 1.599 2.228 2.228 0 0 0 1.628.621Z"
              fill="#fff"
            />
            <g filter="url(#c)">
              <path
                d="M17.633 146.553h206.09a7.632 7.632 0 0 1 7.633 7.633v38.165a7.633 7.633 0 0 1-7.633 7.633H17.633A7.631 7.631 0 0 1 10 192.351v-38.165a7.632 7.632 0 0 1 7.633-7.633Z"
                fill="#fff"
              />
            </g>
            <path
              d="M115.335 158.766H75.644a4.58 4.58 0 1 0 0 9.16h39.691a4.58 4.58 0 0 0 0-9.16Z"
              fill="#CDE1FF"
            />
            <path
              d="M142.814 178.612h-67.17a4.58 4.58 0 1 0 0 9.159h67.17a4.58 4.58 0 1 0 0-9.159Z"
              fill="#CCDAFF"
            />
            <path
              d="M51.218 151.133H22.213a7.633 7.633 0 0 0-7.633 7.633v29.005a7.633 7.633 0 0 0 7.633 7.633h29.005a7.633 7.633 0 0 0 7.633-7.633v-29.005a7.633 7.633 0 0 0-7.633-7.633Z"
              fill="#1751D0"
            />
            <path
              d="M33.238 178.276h3.053l.034-1.176c0-1.544.974-1.947 2.35-2.384a6.613 6.613 0 0 0 4.803-6.348 6.34 6.34 0 0 0-6.65-6.549 6.847 6.847 0 0 0-4.997 2.014 6.851 6.851 0 0 0-1.988 5.009H33a3.841 3.841 0 0 1 3.831-3.933c.462-.027.923.046 1.354.214a3.215 3.215 0 0 1 2.039 3.279 3.48 3.48 0 0 1-2.553 3.258l-1.108.439a4.455 4.455 0 0 0-3.359 5.005l.034 1.172Zm1.511 7.257a2.223 2.223 0 0 0 1.628-.62 2.237 2.237 0 0 0 .69-1.599 2.239 2.239 0 0 0-2.318-2.217 2.238 2.238 0 0 0-2.317 2.217 2.234 2.234 0 0 0 1.44 2.074c.28.107.578.156.877.145Z"
              fill="#fff"
            />
            <defs>
              <filter
                id="a"
                x=".84"
                y="10.686"
                width="239.676"
                height="71.75"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4.58" />
                <feGaussianBlur stdDeviation="4.58" />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.161 0" />
                <feBlend
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_289_775"
                />
                <feBlend
                  in="SourceGraphic"
                  in2="effect1_dropShadow_289_775"
                  result="shape"
                />
              </filter>
              <filter
                id="b"
                x="66.484"
                y="76.33"
                width="239.676"
                height="71.75"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4.58" />
                <feGaussianBlur stdDeviation="4.58" />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.161 0" />
                <feBlend
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_289_775"
                />
                <feBlend
                  in="SourceGraphic"
                  in2="effect1_dropShadow_289_775"
                  result="shape"
                />
              </filter>
              <filter
                id="c"
                x=".84"
                y="141.973"
                width="239.676"
                height="71.75"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4.58" />
                <feGaussianBlur stdDeviation="4.58" />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.161 0" />
                <feBlend
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_289_775"
                />
                <feBlend
                  in="SourceGraphic"
                  in2="effect1_dropShadow_289_775"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>

        )}
        {introVisible && (
          <Box sx={{ my: isDesktop ? "40px" : "0px" }}>
            <Typography>
              <strong>Welcome to UGChat!</strong>
            </Typography>
            <Typography>
              <strong>How may I help you today?</strong>
            </Typography>
            <Typography sx={{ my: "10px" }}>
              I'm here to provide you with the information you're seeking.
              <br /> So go ahead, ask away and let's start our conversation!
            </Typography>
          </Box>)}
        <Box sx={{ my: isDesktop && !introVisible ? "40px" : "0px" }}>
          <List>
            {messages.map((message, index) => (
              <ListItem
                key={index}
                alignItems="flex-start"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: message.name === "User" ? "flex-end" : "flex-start",
                  mb: 1,
                }}
              >
                <ListItemText
                  primary={message.name === "User" ? "You" : "UG Chat"}
                />
                <span
                  style={{
                    backgroundColor: message.name === "User" ? "#007BFF" : "#E5E5EA",
                    color: message.name === "User" ? "white" : "black",
                    borderRadius: "10px",
                    padding: "8px 20px",
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
            position: "fixed",
            osition: "fixed",
            bottom: 0,
            left: 0,
            width: isDesktop ? "855px" : "80%",
            maxWidth: "100%",
            pr: isDesktop ? "205px" : "20px",
            pl: isDesktop ? "200px" : "20px",
            pb: isDesktop ? "0" : "20px",
            borderTop: "1px solid #DCDCDE",
            backgroundColor: "#FFFFFF",
            display: "flex",
            flexDirection: isDesktop ? "row" : "row",
            alignItems: isDesktop ? "center" : "center",


          }}
        >
          <TextField
            fullWidth
            label="Type here..."
            id="fullWidth"
            value={input}
            onChange={(e) => setInput(e.target.value)}

            sx={{

              pr: "10px",
              pb: isDesktop ? "20px" : "20px",
              ml: isDesktop ? "40px" : "20px",
              mt: isDesktop ? "20px" : "20px",

            }}
          />
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={onSendButton}
            style={{ cursor: "pointer" }}
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
    </div>
  );
}

export default Empty;


