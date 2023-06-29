import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// import { Google } from '@material-ui/icons';
import "../styles/index.scss";
import { Container, Typography } from "@mui/material";
import { ReactComponent as SocialIcon } from './Social.svg';


function sign_up() {

  
  return (
    <div>
      <Box sx={{ py: "80px" }}>
        <h1>Create your account</h1>
        <p>Enter the fields below to get started</p>
        <Button
          variant="outlined"
          
          className="button"
          sx={{ my: "24px",  color:"black", borderColor:"#E6E6E6" ,textTransform: "none"}}
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
            mx: "440px",
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
                color:'#ffff'
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
              },
            }}
          />
        </Box>

        <Button
          variant="contained"
          disableElevation
          className="button"
          sx={{ my: "24px", backgroundColor: "#1751D0" ,textTransform: "none"}}
        >
          Create Account
        </Button>
        <Container sx={{
            display: "flex",
            flexDirection: "row",  justifyContent: "center",
            alignItems: "center",}}><Typography >Already have an account? </Typography><Typography sx={{color:"#1751D0"}}>Log in</Typography></Container>
        
      </Box>
    </div>
  );
}

export default sign_up;
