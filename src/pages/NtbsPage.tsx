import React from "react";
import CardsNtb from "../components/CardsNtb/CardsNtb";
import { Helmet } from "react-helmet";

const title = "Notebooky";

const NtbsPage = () => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <CardsNtb />
    </>
  );
};

export default NtbsPage;
