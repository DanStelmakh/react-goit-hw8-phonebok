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
      <List>
        {visibleContacts.map(contact => (
          <Item key={contact.id}>
            <div>
              <div>{contact.name}</div>
              <dispatchEvent>{contact.number}</dispatchEvent>
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
