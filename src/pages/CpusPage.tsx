import React from "react";
import CardsCpu from "../components/CardsCpu/CardsCpu";
import { Helmet } from "react-helmet";

const title = "Procesory";

const CpusPage = () => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <CardsCpu />
    </>
  );
};

export default CpusPage;
