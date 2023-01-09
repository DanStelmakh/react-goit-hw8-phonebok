import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from 'redux/auth/auth_selectors';
import { logOut } from 'redux/auth/auth_operations';
import LogoutIcon from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    neutral: {
      main: '#fff',
      contrastText: '#42a5f5',
    },
  },
});

export const UserMenu = () => {
  const name = useSelector(getUserName);
  const dispatch = useDispatch();
  return (
    <ThemeProvider theme={theme}>
      <div stylr={{ display: 'flex', alignItems: 'center' }}>
        <p style={{ marginRight: 10 }}>Welcome, {name}</p>
        <Button
          startIcon={<LogoutIcon />}
          variant="contained"
          color="neutral"
          type="button"
          onClick={() => dispatch(logOut())}
        >
          Logout
        </Button>
      </div>
    </ThemeProvider>
  );
};
