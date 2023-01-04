import { Link } from 'react-router-dom';

export const AuthMenu = () => {
  return (
    <>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </>
  );
};
