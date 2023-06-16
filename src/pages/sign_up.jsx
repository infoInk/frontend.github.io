import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import '../styles/index.scss'

function sign_up() {
  return (
    <div>
        
        <h2>Create your account</h2>
        <p>Enter the fields below to get started</p>
        <Box sx={{ display: 'flex',
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'center' , 
        border: '1px solid #000000',
       
        
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

              <Button variant="contained" disableElevation className='button'>Create Account</Button>

    </div>
  )
}

export default sign_up