import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// import { Google } from '@material-ui/icons';
import "../styles/index.scss";
import { Container, Typography, useMediaQuery, useTheme } from "@mui/material";
import { ReactComponent as SocialIcon } from "./Social.svg";

function SignUp() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div>
      <Box sx={{ py: "20px" }}>
        <h1>Create your account</h1>
        <p>Enter the fields below to get started</p>
        <Button
          variant="outlined"
          className="button"
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
          <TextField
            id="outlined-basic"
            label="Enter name*"
            variant="filled"
            fullWidth
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
            label="Enter email*"
            variant="filled"
            fullWidth
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
          <Typography sx={{ color: "#1751D0" }}>Log in</Typography>
        </Container>
      </Box>
    </div>
  );
}

export default SignUp;
