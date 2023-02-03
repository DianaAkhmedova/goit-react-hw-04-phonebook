import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 10px 10px 40px;
  width: 400px;
  justify-content: space-between;
  border: 1px solid black;
  border-radius: 4px;
  background-color: #aab7be;

  &:not(:last-child) {
    margin-bottom: 4px;
  }
`;

export const ContactInfo = styled.p`
  font-weight: 500;
`;

export const RemoveBtn = styled.button`
  min-width: 75px;
  padding: 5px 12px;
  border: 1px solid red;
  border-radius: 4px;
  background-color: white;
  font-family: inherit;
  font-size: 16px;
  cursor: pointer;
  font-family: inherit;
  color: red;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: white;
    background-color: red;
  }
`;
