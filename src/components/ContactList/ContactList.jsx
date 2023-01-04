import React from 'react';
import { Btn, List, Item } from 'components/ContactList/ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts, removeContact } from 'redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();

  const visibleContacts = useSelector(getVisibleContacts);

  //   const contactList = useSelector(getContacts);
  //   const filter = useSelector(getFilter);

  //   function getFiltredContacts() {
  //     if (!filter) {
  //       return contactList;
  //     }
  //     const normalizedFilter = filter.toLowerCase();
  //     return contactList.filter(contact =>
  //       contact.name.toLowerCase().includes(normalizedFilter)
  //     );
  //   }
  //   const visibleContacts = getFiltredContacts();
  //   console.log(visibleContacts);

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
