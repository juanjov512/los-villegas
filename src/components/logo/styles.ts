import styled from "styled-components";

const ImageContainer = styled.div`
  width: auto;
  height: 70px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  transition-property: opacity transform;

  &:hover {
    opacity: 0.9;
    transform: scale(1.05);
  }
`;

export { ImageContainer };
