import * as React from 'react';
import { useSelector } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Outlet } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import RecentActorsOutlinedIcon from '@mui/icons-material/RecentActorsOutlined';
import { getIsLoggedIn } from 'redux/auth/auth_selectors';
import { UserMenu } from './UserMenu';
import { AuthMenu } from './AuthMenu';
import { LinkHeader } from './Link.styled';
import { Link } from 'react-router-dom';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar color="primary">
          <Link to="contacts">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <RecentActorsOutlinedIcon />
            </IconButton>
          </Link>
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <LinkHeader
              to="/"
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Home
            </LinkHeader>
            <LinkHeader
              to="contacts"
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              My PhoneBook
            </LinkHeader>

            {isLoggedIn ? <UserMenu /> : <AuthMenu />}
          </Grid>
        </Toolbar>
      </AppBar>
      <Outlet />
    </Box>
  );
};
