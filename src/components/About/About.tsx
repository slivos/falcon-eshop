import React from "react";
import { AboutContainer, AboutWrapper, H1, AboutText } from "./About.styled";

const About = () => {
  return (
    <>
      <H1>O nás</H1>
      <AboutContainer>
        <AboutWrapper>
          <AboutText>
            Sme menšia firma zaoberajúca sa predajom elektroniky, komponentov do
            PC a notebookov. Náš tím vznikol vďaka práci, ktorá ich baví,
            spočiatku to nebolo jednoduché, no neskôr sme sa postupne začali
            rozbiehať a prišli sme až tam, kde sme dnes : &#41;.
          </AboutText>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default About;
