import styled from "styled-components";

interface IContainerProps {
  $minHeight?: string;
  $margin?: string;
  $marginTop?: string;
  $alignItems?: string;
  $padding?: string;
}

const Container = styled.div<IContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: ${(props) => props.$alignItems || "center"};
  justify-content: space-between;
  width: 100%;
  min-height: ${(props) => props.$minHeight || "800px"};
  margin: ${(props) => props.$margin || "0 auto"};
  padding: ${(props) => props.$padding || "0"};
  margin-bottom: ${({ theme }) => theme.spacing["3xl"]};
  scroll-margin-top: 7rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.lg};
  width: 100%;
  box-sizing: border-box;
  justify-items: center;
  margin-bottom: ${({ theme }) => theme.spacing["3xl"]};
  scroll-margin-top: 7rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export { Container, GridContainer };
