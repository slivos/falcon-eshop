import styled from "styled-components";
import SvgFalcon from "../Icons/SvgFalcon";
import { FiChevronDown } from "react-icons/fi";
import { DropdownContainer } from "../Dropdown/Dropdown.styled";
import { MdShoppingBasket } from "react-icons/md";

export const StyledNav = styled.nav`
  width: 100%;
  height: auto;
  background-color: #003566;
  color: #ffc300;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 5px #5e5b5b;
  position: fixed;
  z-index: 100;
  padding: 5px 0px;
`;

export const NavUl = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
  font-weight: 600;

  @media (max-width: ${({ theme }) => theme.mobileL}) {
    display: none;
  }
`;

export const DownArrow = styled(FiChevronDown)`
  font-size: 1.1rem;
  stroke-width: 3px;
  position: relative;
  top: 3px;
  color: #ffc300;

  &:hover {
    color: #ffd60a;
  }
`;

export const MenuItem = styled.li`
  position: relative;
  margin-left: 40px;
  padding: 25px 0px;
  color: #ffc300;
  transition: color 0.3s linear;
  cursor: pointer;

  ${DownArrow} {
    transform: rotate(360deg);
    transition: transform 0.5s ease;
  }

  &:hover {
    color: #ffd60a;

    ${DownArrow} {
      transform: rotate(180deg);
      transition: transform 0.5s ease;
    }
  }

  &:hover {
    ${DropdownContainer} {
      opacity: 1;
      visibility: visible;
      transform: translateY(-2.1em);
      transition: all 0.2s ease-in;
    }
  }
`;

export const Logo = styled(SvgFalcon)`
  width: 100%;
  font-size: 4em;
  transition: transform 0.5s;

  @media (max-width: ${({ theme }) => theme.mobileS}) {
    font-size: 3.5em;
  }
`;

export const LogoWrapper = styled.div`
  position: relative;
  right: 50px;
  width: 64px;
  margin: 0;

  span {
    font-size: 1.5rem;
    font-weight: 700;
    color: #ffd60a;
    opacity: 0;
    transition: all 0.5s;
    position: absolute;
    bottom: 20px;
    left: 0;
  }

  &:hover span {
    opacity: 1;
  }

  &:hover ${Logo} {
    transform: translateX(-70px);
  }

  @media (max-width: ${({ theme }) => theme.mobileS}) {
    display: none;
  }
`;

export const ShoppingBasket = styled(MdShoppingBasket)`
  font-size: 1.6rem;
  color: #ffc300;
  cursor: pointer;
  margin-right: 10px;

  @media (max-width: ${({ theme }) => theme.mobileS}) {
    margin-right: 0;
  }

  &:hover {
    color: #ffd60a;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BasketWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 40px;

  @media (max-width: ${({ theme }) => theme.mobileS}) {
    margin-right: 20px;
  }

  span {
    position: absolute;
    top: -30%;
    left: 60%;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: #ff5733;
    color: white;
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
  }
`;

export const MobileLogoWrapper = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.mobileS}) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
