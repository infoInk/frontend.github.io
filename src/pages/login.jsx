import React, { useState } from "react";
import { signInWithGoogle, auth } from "../firebase";
import {
  signInWithEmailAndPassword

} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Container, Typography, useMediaQuery, useTheme } from "@mui/material";
import { ReactComponent as SocialIcon } from "./Social.svg";
import "../styles/index.scss";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSignInWithGoogle = async () => {
    try {
      const result = await signInWithGoogle();
      navigate("/");
    } catch (error) {
      console.log(error);
    }

  }

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div>
      <Box sx={{ py: "20px" }}>
        <h1>Login to your account</h1>
        <p>Enter your credentials below</p>

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
          <TextField
            id="outlined-basic"
            label="Enter email"
            variant="filled"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              "& .MuiFilledInput-root": {
                maxHeight: "40px",
                maxWidth: "400px",
                backgroundColor: "#ffff",
              },
            }}
          />
          <TextField
            id="outlined-basic"
            label="Enter password"
            variant="filled"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            sx={{
              "& .MuiFilledInput-root": {
                maxHeight: "40px",
                maxWidth: "400px",
                backgroundColor: "#ffff",
              },
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            disableElevation
            className="button"
            onClick={login}
            sx={{
              my: "20px",
              backgroundColor: "#1751D0",
              textTransform: "none",
              height: isDesktop ? "40px" : "33.8px",
              width: isDesktop ? "400px" : "338px",
            }}
          >
            Login
          </Button>
          <Button
            variant="outlined"
            className="button"
            onClick={handleSignInWithGoogle}
            sx={{
              my: "20px",
              color: "black",
              borderColor: "#E6E6E6",
              textTransform: "none",
              height: isDesktop ? "40px" : "33.8px",
              width: isDesktop ? "400px" : "338px",
            }}
            startIcon={<SocialIcon />}
          >
            Sign in with Google
          </Button>
        </Box>
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography>Don't have an account? </Typography>
          <Typography sx={{ color: "#1751D0" }}> <Link to="/signup">Sign Up </Link></Typography>
        </Container>
      </Box>
    </div>
  );
}

export default Login;
