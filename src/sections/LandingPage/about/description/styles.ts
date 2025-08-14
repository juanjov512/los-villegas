import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 560px;
  width: 100%;
  gap: ${({ theme }) => theme.spacing.xl};
  margin: 0 auto;
`;

const Title = styled.p`
  color: ${({ theme }) => theme.colors.green[700]};
  font-family: Pattaya;
  font-size: 48px;
  font-weight: 400;
  line-height: 110%;
  letter-spacing: 0px;
  text-align: left;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 38px;
    line-height: 100%;
  }
`;

export { Container, Title };
