import styled from "styled-components";

export const CartContainer = styled.div`
  height: auto;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

export const CartWrapper = styled.div`
  position: relative;
  margin-top: 30px;
  width: 90%;
  height: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const CartWrapperEmpty = styled(CartWrapper)`
  @media (max-width: ${({ theme }) => theme.mobileL}) {
    text-align: center;
  }
`;

export const H1 = styled.h1`
  width: fit-content;
  margin: 0 0 0 10%;
  padding-top: 100px;
  text-align: left;
  border-bottom: 0.3rem solid #019fb6;
`;

export const TextEmpty = styled.span`
  position: relative;
  color: black;
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 2px;
  padding-bottom: 5px;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0.3rem;
    background-color: #019fb6;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;

    @media (max-width: 908px) {
      width: 50%;
      left: 25%;
    }
  }

  &:hover::after {
    transform: scaleX(1);
  }

  &::after {
    transform-origin: 0% 50%;
  }

  span {
    color: #019fb6;
    margin-left: 10px;

    &:hover {
      color: blueviolet;
    }
  }
`;

export const TextWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
`;

export const TextPrice = styled.span`
  font-weight: 700;
  color: #003566;

  @media (max-width: ${({ theme }) => theme.mobileS}) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  strong {
    color: black;
  }
`;

export const EmptyBtn = styled.button`
  padding: 10px 20px;
  color: #ffc300;
  background-color: #001d3d;
  font-weight: 800;
  outline: none;
  border: none;
  cursor: pointer;
  text-align: center;
  transition: color 0.3s ease;

  @media (max-width: ${({ theme }) => theme.mobileS}) {
    padding: 6px 0;
    width: 110px;
    font-weight: 700;
  }

  &:hover {
    color: #ffd60a;
  }
`;
