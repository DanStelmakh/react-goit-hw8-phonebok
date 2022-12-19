import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, removeContact } from './operations';
// import shortid from 'shortid';

const contactsInitialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: {
    //fetchContacts
    [fetchContacts.pending](state) {
      state.contacts.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.contacts.items = action.payload;
      state.contacts.isLoading = false;
      state.contacts.error = null;
    },
    [fetchContacts.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
    //addContact
    [addContact.pending](state) {
      state.contacts.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.contacts.items = action.payload;
      state.contacts.isLoading = false;
      state.contacts.error = null;
    },
    [addContact.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
    //removeContact
    [removeContact.pending](state) {
      state.contacts.isLoading = true;
    },
    [removeContact.fulfilled](state, action) {
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== action.payload
      );
      state.contacts.isLoading = false;
      state.contacts.error = null;
    },
    [removeContact.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
  },
  reducers: {
    //  addContact: {
    //    reducer(state, action) {
    //      state.contacts.push(action.payload);
    //    },
    //    prepare(name, number) {
    //      return {
    //        payload: {
    //          name,
    //          id: shortid.generate(),
    //          number,
    //        },
    //      };
    //    },
    //  },
    //  removeContact(state, action) {
    //    state.contacts = state.contacts.filter(
    //      contact => contact.id !== action.payload
    //    );
    //  },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
