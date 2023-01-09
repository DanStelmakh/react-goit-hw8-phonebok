import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinkHeader = styled(NavLink)`
  padding: 10px;
  border: transparent;
  border-radius: 15px;
  text-decoration: none;
  color: #000;
  &.active {
    background-color: teal;
    color: #fff;
  }
`;
