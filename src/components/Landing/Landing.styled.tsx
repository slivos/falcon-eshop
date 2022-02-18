import styled from "styled-components";

export const HomeBanner = styled.div`
  width: 100%;
  height: 100vh;
  background: url("images/ryzen.jpg") center center/cover no-repeat;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const BannerWrapper = styled.div`
  background: rgba(21, 32, 64, 0.5);
  border-radius: 20px;
  margin-top: 20%;
  width: 45%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Title = styled.h1`
  color: #f4f0ec;
  font-weight: 900;
  font-size: 3.5rem;

  @media (max-width: ${({ theme }) => theme.mobileM}) {
    font-size: 2.2rem;
  }
`;

export const Text = styled.p`
  color: #f4f0ec;
  font-size: 1.3rem;
  font-weight: 700;
  padding: 0 5px 0 5px;

  @media (max-width: ${({ theme }) => theme.mobileM}) {
    font-size: 1rem;
  }
`;
