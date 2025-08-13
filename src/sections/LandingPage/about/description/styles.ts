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
  color: #2e7d32;
  font-family: Pattaya;
  font-size: 48px;
  font-weight: 400;
  line-height: 67px;
  letter-spacing: 0px;
  text-align: left;
  margin: 0;
`;

const Description = styled.p`
  font-family: Poppins;
  font-size: 18px;
  font-weight: 400;
  line-height: 160%;
  letter-spacing: 0px;
  text-align: left;
  margin: 0;
`;

export { Container, Description, Title };
