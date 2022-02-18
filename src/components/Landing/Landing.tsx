import React from "react";
import LandingBtn from "../Button/LandingBtn/LandingBtn";
import { HomeBanner, BannerWrapper, Title, Text } from "./Landing.styled";

const Landing: React.FC = () => {
  return (
    <HomeBanner>
      <BannerWrapper>
        <Title>VÝBER JE NA VÁS</Title>
        <Text>
          Vyberte si rýchly notebook z našej ponuky za bezkonkurenčnú cenu alebo
          siahnite po nových komponentoch !
        </Text>
        <LandingBtn />
      </BannerWrapper>
    </HomeBanner>
  );
};

export default Landing;
