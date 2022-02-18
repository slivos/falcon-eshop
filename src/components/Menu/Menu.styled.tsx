import styled from "styled-components";
import { IMenu } from "./Menu";

export const MenuContainer = styled.div<IMenu>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  background-color: ${({ open }) => (open ? "blueviolet" : "")};
  transition: all 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};

  @media (min-width: ${({ theme }) => theme.mobileL}) {
    display: none;
  }
`;

export const MenuUl = styled.ul<IMenu>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  list-style: none;
  z-index: 200;
  font-size: 1.5rem;
`;

export const MenuItem = styled.li<IMenu>`
  cursor: pointer;
  font-weight: 700;
  color: #ffc300;
  padding-top: 30px;

  &:hover {
    border-bottom: 3px solid #869397;
  }
`;

export const SubmenuUl = styled.ul<IMenu>`
  display: ${({ show }) => (show ? "flex" : "none")};
  flex-direction: column;
  list-style: none;
  padding: 10px 0 0 15px;

  li:hover {
    border-bottom: 3px solid #869397;
  }
`;

export const MenuItemProducts = styled(MenuItem)`
  &:hover {
    border-bottom: ${({ show }) => (show ? "none" : "3px solid #869397")};
  }
`;

export const SubmenuItem = styled.li`
  color: #ffc300;

  &:hover {
    border-bottom: 3px solid #869397;
  }
`;
