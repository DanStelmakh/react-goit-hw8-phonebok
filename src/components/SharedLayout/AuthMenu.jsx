import { LinkHeader } from './Link.styled';

export const AuthMenu = () => {
  return (
    <>
      <LinkHeader to="/login">Login</LinkHeader>
      <LinkHeader to="/register">Register</LinkHeader>
    </>
  );
};
