import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { TotalContacts } from 'components/TotalContacts/TotalContacts';

export const PhoneBook = () => {
  return (
    <>
      <ContactForm />
      <Filter />
      <ContactList />
      <TotalContacts />
    </>
  );
};
