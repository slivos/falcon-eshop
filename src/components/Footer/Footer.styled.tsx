import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

export const FooterBar = styled.footer`
  width: 100%;
  height: 100px;
  background-color: #003566;
  display: flex;
  justify-content: center;
`;

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const FooterWrapper = styled.div`
  width: fit-content;

  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const InfoDiv = styled.div`
  color: #019fb6;
  transition: color 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #ffd60a;
  }
`;

export const GitHub = styled(FaGithub)`
  font-size: 1.2rem;
  color: #019fb6;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #ffd60a;
  }
`;
