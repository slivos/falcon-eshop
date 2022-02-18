import React from "react";
import {
  ContactContainer,
  ContactWrapper,
  H1,
  ContactText,
  ContactSpan,
  InfoSpan,
} from "./Contact.styled";

const Contact = () => {
  return (
    <>
      <H1>Kontakt</H1>
      <ContactContainer>
        <ContactWrapper>
          <ContactText>
            <ContactSpan>Mobil</ContactSpan>
            <InfoSpan>+421 XXX XXX XXX</InfoSpan>
            <ContactSpan>E-mail</ContactSpan>
            <InfoSpan>falcon.eshop@gmail.com</InfoSpan>
          </ContactText>
        </ContactWrapper>
      </ContactContainer>
    </>
  );
};

export default Contact;
