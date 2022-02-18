import React from "react";
import { DropdownContainer, DropdownUl, DropdownItem } from "./Dropdown.styled";
import { LinkTo } from "../LinkTo/LinkTo.styled";

const Dropdown: React.FC = () => {
  return (
    <DropdownContainer>
      <DropdownUl>
        <LinkTo to="/notebooks">
          <DropdownItem>Notebooky</DropdownItem>
        </LinkTo>
        <LinkTo to="/processors">
          <DropdownItem>Procesory</DropdownItem>
        </LinkTo>
      </DropdownUl>
    </DropdownContainer>
  );
};

export default Dropdown;
