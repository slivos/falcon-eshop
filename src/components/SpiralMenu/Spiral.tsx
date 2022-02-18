import React, { useState } from "react";
import { Spiral } from "hamburger-react";
import { SpiralWrapper } from "./Spiral.styled";
import Menu from "../Menu/Menu";

const SpiralMenu = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <SpiralWrapper>
        <Spiral toggled={open} toggle={() => setOpen(!open)} />
      </SpiralWrapper>
      <Menu open={open} closed={handleClose} />
    </>
  );
};

export default SpiralMenu;
