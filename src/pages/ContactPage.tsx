import React from "react";
import Contact from "../components/Contact/Contact";
import { Helmet } from "react-helmet";

const title = "Kontakt";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Contact />
    </>
  );
};

export default ContactPage;
