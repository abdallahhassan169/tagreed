import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const NavBar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{background:'#fff' , color:'#888' , p:'2px 15px'}}>
               موقع تجريد  
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default NavBar;
