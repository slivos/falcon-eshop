import React from "react";
import { Btn } from "./LandingBtn.styled";
import { Link } from "react-router-dom";

const LandingBtn: React.FC = () => {
  return (
    <>
      <Link to="/option">
        <Btn>E-SHOP</Btn>
      </Link>
    </>
  );
};

export default LandingBtn;
