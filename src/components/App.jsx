import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { getCurrentUSer } from 'redux/auth/auth_operations';
import { ContactForm } from 'components/ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from 'components/Filter/Filter';
// import { TotalContacts } from './TotalContacts/TotalContacts';
// import { Container } from 'components/App.styled';
import { SharedLayout } from './SharedLayout/SharedLayout ';
import { NotFound } from 'Pages/NotFound/NotFound';
import { LogIn } from 'Pages/Login/Login';
import { Register } from 'Pages/Register/Register';
import Box from '@mui/material/Box';
// import { PhoneBook } from './PhoneBook/PhoneBook';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUSer());
  }, [dispatch]);

  return (
    <Box>
      {/* <h1>Phonebook</h1>
      <ContactForm />
      <TotalContacts />
      <Filter />
      <ContactList /> */}

      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<ContactForm />} />
          <Route path="login" element={<LogIn />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Box>
  );
};
