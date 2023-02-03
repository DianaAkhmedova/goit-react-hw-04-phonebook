import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #000;
  border-radius: 5px;
  background-color: #ccd4d8;
`;

export const FormLabel = styled.label`
  display: inherit;
  flex-direction: inherit;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 16px;
`;

export const FormInput = styled.input`
  display: block;
  margin-top: 4px;
  padding: 4px 8px;
  border: 1px solid black;

  max-width: 400px;
  font-size: 18px;

  &::placeholder {
    font-size: 14px;
    line-height: 1.14;
    letter-spacing: 0.01em;
    color: rgba(117, 117, 117, 0.5);
  }
`;

export const AddBtn = styled.button`
  min-width: 75px;
  padding: 5px 12px;
  border: 1px solid green;
  border-radius: 4px;
  background-color: white;
  font-family: inherit;
  font-size: 16px;
  cursor: pointer;
  font-family: inherit;
  color: green;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: white;
    background-color: green;
  }
`;
