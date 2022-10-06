import styled from "styled-components";
import {
  Button,
  SectionContainer,
  SectionBigHeading,
  SectionSubheading,
} from "~/components";

export const StyledContainer = styled(({ height, ...props }) => (
  <SectionContainer {...props} />
))`
  align-items: center;
  flex-direction: column;
  gap: 4rem;
  margin-top: 5rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    margin: 0;
  }
`;

export const StyledGetStartedBtn = styled((props) => (
  <Button {...props} variant="contained" color="main" />
))`
  margin-top: 4.375rem;
  padding-top: 0;
  padding-bottom: 0;
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  color: black;

  @media (max-width: 1024px) {
   text-align: center;
  }
`;

export const StyledDescription = styled((props) => (
  <SectionSubheading {...props} />
))`
  margin: 1.563rem 0 0;

  @media (max-width: 1024px) {
    margin: 0;
  }
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  width: 30%;
  margin-left: 11.125rem;
  font-family: sans-serif;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    margin-left: 0;
    align-items: center;
    width: 70%;
  }
`;

export const StyledCTAContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
`;

export const StyledImageContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  max-width: 32.03rem;
  max-height: 65rem;
  width: 100%;
  height: 100%;
  margin-left: auto;

  @media (max-width: 1024px) {
    margin-left: 0;
    align-items: center;
  }
`;
