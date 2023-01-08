import * as React from 'react';
import { useSelector } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Link, Outlet } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from '@mui/material/Grid';
import { getIsLoggedIn } from 'redux/auth/auth_selectors';
import { UserMenu } from './UserMenu';
import { AuthMenu } from './AuthMenu';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Link to="/" variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Home
            </Link>
            {/* <Link
              to="contacts"
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              My PhoneBook
            </Link> */}

            {isLoggedIn ? <UserMenu /> : <AuthMenu />}
          </Grid>
        </Toolbar>
      </AppBar>
      <Outlet />
    </Box>
  );
};
