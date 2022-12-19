import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

export const TotalContacts = () => {
  const contacts = useSelector(getContacts);
  return (
    <div>
      <span>Total number of contacts: {contacts.length}</span>
    </div>
  );
};
