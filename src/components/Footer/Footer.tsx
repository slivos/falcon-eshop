import React from "react";
import {
  FooterBar,
  FooterContainer,
  FooterWrapper,
  GitHub,
  InfoDiv,
} from "./Footer.styled";
import { LinkTo } from "../LinkTo/LinkTo.styled";

const Footer = () => {
  return (
    <FooterBar>
      <FooterContainer>
        <FooterWrapper>
          <LinkTo to="/about">
            <InfoDiv>O nás</InfoDiv>
          </LinkTo>
          <LinkTo to="/contact">
            <InfoDiv>Kontakt</InfoDiv>
          </LinkTo>
          <a href="https://github.com/slivos/falcon-eshop" target="_blank">
            <GitHub />
          </a>
        </FooterWrapper>
      </FooterContainer>
    </FooterBar>
  );
};

export default Footer;
