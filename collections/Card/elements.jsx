import React from "react";
import styled from "styled-components";

import { SectionSubheading, SectionParagraph } from "~/components";

export const StyledTitle = styled((props) => <SectionSubheading {...props} />)`
  font-weight: 700;
  color: black;
`;

export const StyledDescription = styled((props) => (
  <SectionParagraph {...props} />
))`
  padding-right: 3rem;
`;

export const StyledIconContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  max-width: 5rem;
  max-height: 5rem;
  width: 75%;
  height: 75%;
  justify-content: center;
  align-self: center;
  padding: 2rem;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: column;
  color: black;
  font-family: sans-serif;
  align-items: flex-start;
  padding: 2rem 0;
`;

export const StyledCardContainer = styled.div`
  margin-right: ${({ position }) =>
    position === 2 ? "0" : position === 1 ? "1rem" : "2rem"};
  display: flex;
  background: rgba(244, 244, 244, 255);
  border-radius: 15px;
  border: 2px solid transparent;

  :hover {
    border: 2px solid #1e7efb;
    h3 {
      color: #1e7efb;
      text-decoration: underline;
    }
    cursor: pointer;
  }
`;
