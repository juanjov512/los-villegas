import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import styled from "styled-components";

const Container = styled(AccordionPrimitive.Root)`
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const Trigger = styled(AccordionPrimitive.Trigger)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  cursor: pointer;
  padding: 1rem 0;

  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 500;
  line-height: 200%;
`;

const ChevronIcon = styled(FontAwesomeIcon)`
  transition: transform 300ms;
  color: ${({ theme }) => theme.colors.gray[600]};

  [data-state="open"] & {
    transform: rotate(180deg);
  }
`;

const Content = styled(AccordionPrimitive.Content)`
  padding: 1.25rem 0.5rem;

  color: ${({ theme }) => theme.colors.gray[700]};
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 500;
  line-height: 160%;
`;

export { ChevronIcon, Container, Content, Trigger };
