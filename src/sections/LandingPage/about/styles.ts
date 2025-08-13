import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  gap: ${({ theme }) => theme.spacing["3xl"]};

  @media (max-width: 1050px) {
    flex-direction: column-reverse;
  }
`;

export { CardContainer };
