import styled from "styled-components";

import type { ITextProps } from "./types";

const Title = styled.h1<ITextProps>`
  color: #091133;
  font-size: ${(props) =>
    props.size === "large"
      ? "50px"
      : props.size === "medium"
        ? "36px"
        : "16px"};
  font-weight: 500;
  line-height: ${(props) =>
    props.size === "large" ? "66x" : props.size === "medium" ? "48px" : "26px"};
  letter-spacing: 1px;
  margin: 0;
`;

const Text = styled.p<ITextProps>`
  font-family: Poppins;
  font-size: 18px;
  font-weight: 400;
  line-height: 160%;
  letter-spacing: 0px;
  text-align: left;
  margin: 0;
`;

export { Title, Text };
