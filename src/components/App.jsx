import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { getCurrentUSer } from 'redux/auth/auth_operations';
import { ContactForm } from 'components/ContactForm/ContactForm';
// import { getIsLoggedIn } from 'redux/auth/auth_selectors';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from 'components/Filter/Filter';
// import { TotalContacts } from './TotalContacts/TotalContacts';
// import { Container } from 'components/App.styled';
import { SharedLayout } from './SharedLayout/SharedLayout ';
import { NotFound } from 'Pages/NotFound/NotFound';
import { LogIn } from 'Pages/Login/Login';
import { Register } from 'Pages/Register/Register';
import { HomePage } from 'Pages/HomePage/HomePage';
import Box from '@mui/material/Box';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';
import { getIsRefreshing } from 'redux/auth/auth_selectors';

export const App = () => {
  const dispatch = useDispatch();

  const isRefreshing = useSelector(getIsRefreshing);

  useEffect(() => {
    dispatch(getCurrentUSer());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Box>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />

            <Route
              path="login"
              element={
                <RestrictedRoute component={LogIn} redirectTo="/contacts" />
              }
            />
            <Route
              path="register"
              element={
                <RestrictedRoute component={Register} redirectTo="/contacts" />
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute component={ContactForm} redirectTo="/logIn" />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Box>
    )
  );
};
