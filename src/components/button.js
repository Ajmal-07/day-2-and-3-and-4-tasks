import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './App.css';
export default function OutlinedButtons() {
  return (
      <div className='buttonDiv'  style={{
        // backgroundColor : "red"
      }}>
        <Stack direction="row">
          
          <Button className='b1' variant="outlined" href="#outlined-buttons" style={{
            marginRight:100
          }}>
            Sign up
          </Button>
          <Button className='b2' variant="outlined" href="#outlined-buttons" >
            Sign in
          </Button>

        </Stack>
      </div>
  );
}