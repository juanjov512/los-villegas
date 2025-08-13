import styled from "styled-components";

interface IContainerProps {
  direction?: string;
  gap?: string;
}

const Container = styled.div<IContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`;

const Title = styled.p`
  font-family: Poppins;
  font-size: 40px;
  font-weight: 600;
  line-height: 160%;
  letter-spacing: 0px;
  margin: 0;
  text-align: center;
`;

const ColumnContainer = styled.div`
  display: grid;
  gap: 0;
  width: 100%;
`;

export { Container, TextContainer, Title, ColumnContainer };
