import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

export default function CustomizedRating() {
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      
      <Typography component="legend"></Typography>
      <Rating name="customized-10" defaultValue={1} max={5} />
    </Box>
  );
}