import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 230px;
  height: 320px;
  padding: 20px;
  gap: 5px;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  transition: 1s ease;
  
  &:hover {
    scale: 1.03;
    box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.7);
  }
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #59e4a8;
  padding: 10px;
  font-size: 2em;
`

export { Container, LogoContainer };
