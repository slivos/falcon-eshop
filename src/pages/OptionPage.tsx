import React from "react";
import { Helmet } from "react-helmet";
import DiagonalLine from "../components/DiagonalLine/DiagonalLine";

const title = "Falcon Store";

const Option = () => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <DiagonalLine />
    </>
  );
};

export default Option;
