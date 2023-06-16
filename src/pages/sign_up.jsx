import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import '../styles/index.scss'

function sign_up() {
  return (
    <div >
        <Box sx={{py:'200px'}}>
        <h2>Create your account</h2>
        <p>Enter the fields below to get started</p>
        <Box sx={{ display: 'flex',
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'center' , 
        border: '1px solid #E6E6E6',
        borderRadius:'4px',
        mx:'432px'
        
        }}>
        <TextField id="outlined-basic" label="Enter name*" variant="filled" sx={{
         
         '& .MuiFilledInput-root': {
          height: '40px',
          width: '400px',
        },
       }} />
       <TextField id="outlined-basic" label="Enter email*" variant="filled" sx={{
         '& .MuiFilledInput-root': {
          height: '40px', 
          width: '400px',
          
         
        },
       }} />
       <TextField id="outlined-basic" label="Create a password*" variant="filled" sx={{
         '& .MuiFilledInput-root': {
          height: '40px', 
          width: '400px', 
        },
       }} />
       </Box>

              <Button variant="contained" disableElevation className='button' sx={{my:'10px', backgroundColor:'#1751D0'}}>Create Account</Button>
              <Typography>Already have an account? <Typography> Log in</Typography></Typography>
              </Box>
    </div>
  )
}

export default sign_up