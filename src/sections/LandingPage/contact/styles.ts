import styled from "styled-components";

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1032px;
  height: 25rem;
  overflow: hidden;
  margin: 0 auto;
  border-radius: ${({ theme }) => theme.borderRadius.full};

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(0deg, rgb(46, 125, 50), rgba(0, 0, 0, 0) 100%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 560px;
  }
`;

const Card = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 36px;
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.spacing["2xl"]};
  flex-direction: column;
  z-index: 1;
`;

const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: Poppins;
  font-size: ${({ theme }) => theme.fontSizes["4xl"]};
  font-weight: 700;
  line-height: 130%;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes["3xl"]};
  }
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: Poppins;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 600;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;

export { Card, ImageContainer, Title, Text };
