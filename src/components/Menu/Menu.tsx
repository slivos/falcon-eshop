import React, { useState } from "react";
import {
  MenuContainer,
  MenuItem,
  MenuUl,
  SubmenuUl,
  SubmenuItem,
  MenuItemProducts,
} from "./Menu.styled";
import { LinkTo } from "../LinkTo/LinkTo.styled";

export interface IMenu {
  open?: boolean;
  show?: boolean;
  closed?: () => void;
}

const Menu = (props: IMenu) => {
  const [show, setShow] = useState(false);

  const handleDropdown = () => {
    setShow(!show);
  };

  return (
    <MenuContainer open={props.open}>
      <MenuUl>
        <LinkTo onClick={props.closed} to="/">
          <MenuItem>DOMOV</MenuItem>
        </LinkTo>
        <MenuItemProducts onClick={() => handleDropdown()} show={show}>
          PRODUKTY
          <SubmenuUl show={show}>
            <LinkTo onClick={props.closed} to="/notebooks">
              <SubmenuItem>Notebooky</SubmenuItem>
            </LinkTo>
            <LinkTo onClick={props.closed} to="/processors">
              <SubmenuItem>Procesory</SubmenuItem>
            </LinkTo>
          </SubmenuUl>
        </MenuItemProducts>
        <LinkTo onClick={props.closed} to="/about">
          <MenuItem>O NÁS</MenuItem>
        </LinkTo>
        <LinkTo onClick={props.closed} to="/contact">
          <MenuItem>KONTAKT</MenuItem>
        </LinkTo>
      </MenuUl>
    </MenuContainer>
  );
};

export default Menu;
