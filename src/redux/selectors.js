import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;

export const getIsLoading = state => state.contacts.isLoading;

export const getError = state => state.contacts.error;

export const getFilter = state => state.filter;

export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    console.log(contacts);
    return contacts.filter(contact => {
      return contact.name.includes(filter);
    });
  }
);
