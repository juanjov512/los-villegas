import styled from "styled-components";

const ImageContainer = styled.div`
  display: flex;
  gap: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 45px;
`

const ImageTag = styled.img`
  max-height: 100%;
  width: auto;
`

export { ImageContainer, ImageTag };
