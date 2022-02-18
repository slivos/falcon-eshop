import React from "react";
import Landing from "../components/Landing/Landing";
import { Helmet } from "react-helmet";

const title = "Domov";

const LandingPage = () => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Landing />
    </>
  );
};

export default LandingPage;
