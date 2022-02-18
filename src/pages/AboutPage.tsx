import React from "react";
import About from "../components/About/About";
import { Helmet } from "react-helmet";

const title = "O nás";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <About />
    </>
  );
};

export default AboutPage;
