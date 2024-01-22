import styled from "styled-components";

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 616px;
  min-width: 55%;

  @media (max-width: 768px) {
    max-width: 648px;
  }
`

const ImageTag = styled.img`
  max-width: 100%;
  height: auto;

  @media (max-width: 768px) {
    max-width: 648px;
  }
`

export { ImageContainer, ImageTag }