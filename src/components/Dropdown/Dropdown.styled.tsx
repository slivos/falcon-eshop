import styled from "styled-components";

export const DropdownContainer = styled.div`
  opacity: 0;
  visibility: hidden;
  position: absolute;
  left: -1.5em;
  display: flex;
  justify-content: center;
  white-space: nowrap;
  background-color: #001d3d;
  border-radius: 8px;
  font-weight: 600;
  margin-top: 60px;
  width: 8em;
  height: 5em;
  transition: all 0.2s ease-out;
`;

export const DropdownUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const DropdownItem = styled.li`
  color: #ffc300;
  transition: color 0.3s linear;
  cursor: pointer;

  &:hover {
    color: #ffd60a;
    background-color: #003566;
  }
`;
