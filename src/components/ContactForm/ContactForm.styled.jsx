import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 15px;
  flex-direction: column;
  margin-top: 15px;

  margin-bottom: 15px;
  padding: 15px;
  border-radius: 15px;
  box-shadow: inset 0px 0px 88px 24px rgba(255, 162, 0, 0.5);
`;
export const Input = styled.input`
  font-size: 15px;
  padding: 10px;

  :hover {
    transition: box-shadow 250ms cubic-bezier(0.215, 0.61, 0.355, 1);

    box-shadow: 1px 1px 10px 10px rgba(255, 162, 0, 0.5);
  }
`;
export const Btn = styled.button`
  width: 100px;
  padding: 10px;
  border-radius: 15px;
  border-color: transparent;
  background-color: orange;
  :hover {
    background-color: rgba(255, 162, 0, 0.5);
  }
`;

export const Txt = styled.p`
  display: flex;
  align-items: center;
  gap: 15px;
  justify-content: space-between;
`;
