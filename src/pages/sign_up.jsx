import React, { useState } from "react";
import { signInWithGoogle, auth } from "../firebase";
import {
  createUserWithEmailAndPassword,

} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField"
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "../styles/index.scss";

import { Container, Typography, useMediaQuery, useTheme } from "@mui/material";
import { ReactComponent as SocialIcon } from "./Social.svg";

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const navigate = useNavigate(); // Correct usage of useNavigate

  const handleSignInWithGoogle = async () => {
    try {
      const result = await signInWithGoogle();
      // Handle successful sign-in
      navigate("/");
    } catch (error) {
      console.log(error);
    }

  }

  const register = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
  
  
  
      // Navigate to /empty
      navigate("/");
    } catch (error) {
      console.log("Registration error:", error.message);
    }
  };
  
  return (
    <div>
      <Box sx={{ py: "20px" }}>
        <h1>Create your account</h1>
        <p>Enter the fields below to get started</p>
        <Button
          variant="outlined"
          className="button"
          onClick={handleSignInWithGoogle}
          sx={{
            my: "24px",
            color: "black",
            borderColor: "#E6E6E6",
            textTransform: "none",
            height: isDesktop ? "40px" : "33.8px",
            width: isDesktop ? "400px" : "338px",
          }}
          startIcon={<SocialIcon />}
        >
          Sign up with Google
        </Button>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #E6E6E6",
            borderRadius: "4px",
            mx: isDesktop ? "440px" : "26px",
            px: isDesktop ? "0" : "0px",
          }}
        >
          {/* <TextField
            id="outlined-basic"
            label="Enter name*"
            variant="filled"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{
              "& .MuiFilledInput-root": {
                maxheight: "40px",
                maxwidth: "400px",
                backgroundColor: "#ffff",
              },
            }}
          /> */}
          <TextField
            id="email-input"
            label="Enter email*"
            variant="filled"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              "& .MuiFilledInput-root": {
                maxheight: "40px",
                maxwidth: "400px",
                backgroundColor: "#ffff",
              },
            }}
          />
          <TextField
            id="outlined-basic"
            label="Create a password*"
            variant="filled"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              "& .MuiFilledInput-root": {
                maxheight: "40px",
                maxwidth: "400px",
                backgroundColor: "#ffff",
              },
            }}
          />
        </Box>

        <Button
          variant="contained"
          disableElevation
          className="button"
          onClick={register}
          sx={{
            my: "24px",
            backgroundColor: "#1751D0",
            textTransform: "none",
            height: isDesktop ? "40px" : "33.8px",
            width: isDesktop ? "400px" : "338px",
          }}
        >
          Create Account
        </Button>
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography>Already have an account? </Typography>
          <Typography sx={{ color: "#1751D0" }}><Link to ="/login">Log in</Link></Typography>
        </Container>
      </Box>
    </div>
  );
}

export default SignUp;
