import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { getIsLoading, getError } from 'redux/selectors';
import { PacmanLoader } from 'react-spinners';

export const TotalContacts = () => {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  return (
    <>
      {isLoading && !error && (
        <PacmanLoader color={` rgba(255, 162, 0, 0.5)`} />
      )}
      <div>
        <span>Total number of contacts: {contacts.length}</span>
      </div>
    </>
  );
};
