import React from "react";
import { Container, PrimaryTr, SecondaryTr } from "./DiagonalLine.styled";
import { LinkTo } from "../LinkTo/LinkTo.styled";

const DiagonalLine: React.FC = () => {
  return (
    <>
      <Container>
        <PrimaryTr>
          <LinkTo to="/notebooks">
            <span>NOTEBOOKY</span>
          </LinkTo>
        </PrimaryTr>
        <SecondaryTr>
          <LinkTo to="/processors">
            <span>PROCESORY</span>
          </LinkTo>
        </SecondaryTr>
      </Container>
    </>
  );
};

export default DiagonalLine;
