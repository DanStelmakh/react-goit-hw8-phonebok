import styled from 'styled-components';
export const List = styled.ul`
  padding: 10px;
  border: transparent;
  border-radius: 15px;
  box-shadow: inset 0px 0px 88px 24px rgba(255, 162, 0, 0.5);
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 250px;

  padding: 10px;
`;

export const Btn = styled.button`
  padding: 10px;
  border-radius: 15px;
  border-color: transparent;
  background-color: orange;
  :hover {
    background-color: rgba(255, 162, 0, 0.5);
  }
`;
