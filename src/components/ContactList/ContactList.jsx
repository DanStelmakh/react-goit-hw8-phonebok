import React from 'react';
import { Btn, List, Item } from 'components/ContactList/ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import {
  getFilteredContacts,
  getContacts,
  getIsLoading,
  getError,
} from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts, removeContact } from 'redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilteredContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const visibleContacts = () => {
    const filteredContacts = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });

    return filteredContacts;
  };
  return (
    <>
      {isLoading && !error && <b>Request in progress...</b>}
      <List>
        {visibleContacts().map(contact => (
          <Item key={contact.id}>
            {contact.name}: {contact.number}
            <Btn
              type="button"
              onClick={() => dispatch(removeContact(contact.id))}
            >
              Delete
            </Btn>
          </Item>
        ))}
      </List>
    </>
  );
};
