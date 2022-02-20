import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";
import {
  StyledNav,
  Logo,
  LogoWrapper,
  DownArrow,
  MenuItem,
  ShoppingBasket,
  BasketWrapper,
  RightContainer,
  NavUl,
  MobileLogoWrapper,
} from "./Navbar.styled";
import { useCart } from "../../contexts/CartContext";
import SpiralMenu from "../SpiralMenu/Spiral";
import { LinkTo } from "../LinkTo/LinkTo.styled";

const Navbar: React.FC = () => {
  const { products } = useCart();

  const totalProducts = products.reduce(
    (acc, product) => acc + product.quantity,
    0
  );

  return (
    <StyledNav>
      <SpiralMenu />
      <NavUl>
        <LinkTo to="/">
          <MenuItem>DOMOV</MenuItem>
        </LinkTo>
        <MenuItem>
          PRODUKTY &nbsp;
          <DownArrow />
          <Dropdown />
        </MenuItem>
        <LinkTo to="/about">
          <MenuItem>O NÁS</MenuItem>
        </LinkTo>
        <LinkTo to="/contact">
          <MenuItem>KONTAKT</MenuItem>
        </LinkTo>
      </NavUl>
      <MobileLogoWrapper>
        <Logo />
      </MobileLogoWrapper>
      <RightContainer>
        <LogoWrapper>
          <Logo />
          <span>FALCON</span>
        </LogoWrapper>
        <BasketWrapper>
          <Link to="/cart">
            <ShoppingBasket />
            <span>{totalProducts}</span>
          </Link>
        </BasketWrapper>
      </RightContainer>
    </StyledNav>
  );
};

export default Navbar;
