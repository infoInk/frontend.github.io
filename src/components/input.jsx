import React from 'react'
import TextField from '@mui/material/TextField';

function input() {
  return (
    <div>
       <TextField id="outlined-basic" label="Enter Name" variant="outlined" sx={{
         borderBottom: 'none',
         '& .MuiOutlinedInput-root': {
          height: '40px', // Adjust the height value as needed
        },
       }} />
    </div>
  )
}

export default input