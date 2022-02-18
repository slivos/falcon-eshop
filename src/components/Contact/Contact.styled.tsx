import styled from "styled-components";

export const ContactContainer = styled.div`
  height: auto;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ContactWrapper = styled.div`
  width: 90%;
  height: auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const H1 = styled.h1`
  width: fit-content;
  margin: 0 0 0 10%;
  padding-top: 100px;
  text-align: left;
  border-bottom: 0.3rem solid #019fb6;
`;

export const ContactText = styled.div`
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContactSpan = styled.span`
  margin: 50px 0 0 0;
  font-weight: 700;
  color: #003566;
`;

export const InfoSpan = styled.span`
  margin: 5px 0 0 0;
  font-weight: 600;
`;
