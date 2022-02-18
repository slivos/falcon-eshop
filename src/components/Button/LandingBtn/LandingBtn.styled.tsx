import styled from "styled-components";

export const Btn = styled.button`
  padding: 15px 50px;
  margin-bottom: 15px;
  outline: none;
  border: none;
  background-color: #ffc300;
  color: #003566;
  font-weight: 800;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #003566;
    color: #ffc300;
  }

  @media (max-width: ${({ theme }) => theme.mobileM}) {
    padding: 10px 25px;
  }
`;
