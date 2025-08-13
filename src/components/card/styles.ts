import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: ${({ theme }) => `${theme.spacing["2xl"]} ${theme.spacing["3xl"]}`};
  gap: ${({ theme }) => theme.spacing.xl};
  box-sizing: border-box;
  width: 100%;
  min-height: 30rem;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  transition: 0.3s ease-in-out;
  transition-property: background, transform;

  &:hover {
    background: #f5f7f2;
    transform: scale(1.05);
  }
`;

const Title = styled.p`
  font-family: Poppins;
  font-size: 30px;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: 0px;
  text-align: left;
  margin: 0;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: #396b03;
  height: 90px;
  width: auto;
`;

export { Container, Title, StyledFontAwesomeIcon };
