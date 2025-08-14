import styled from "styled-components";

import type { ITextProps } from "./types";

const Text = styled.p<ITextProps>`
  font-family: Poppins;
  font-size: 18px;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: 0px;
  text-align: left;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 16px;
    line-height: 120%;
  }
`;

export { Text };
