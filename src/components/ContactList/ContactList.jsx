import React from 'react';
import { Btn, List, Item } from 'components/ContactList/ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts, removeContact } from 'redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();

  const visibleContacts = useSelector(getVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h2>My Contacts</h2>
      <List>
        {visibleContacts.map(contact => (
          <Item key={contact.id}>
            <div>
              <div>{contact.name}</div>
              <div>{contact.number}</div>
            </div>
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
