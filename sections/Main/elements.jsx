import styled from "styled-components";

import {
  SectionHeading,
  SectionSubheading,
  SectionContainer,
} from "~/components";

export const StyledImageContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  max-width: 24.48rem;
  max-height: 46.8rem;
  width: 100%;
  height: 100%;
  align-self: center;
`;

export const StyledTitle = styled(({ ...props }) => (
  <SectionHeading {...props} />
))`
  color: black;
  text-align: center;
`;

export const StyledDescription = styled(({ ...props }) => (
  <SectionSubheading {...props} />
))`
  text-align: center;
  margin-top: 0;
`;

export const StyledTextContainer = styled(({ ...props }) => (
  <SectionContainer {...props} />
))`
  flex-direction: column;
`;

export const StyledServicesContainer = styled(({ ...props }) => (
  <SectionContainer {...props} />
))`
  flex-direction: column;
  gap: 4rem;
  width: min(1100px, 85%);
  padding-bottom: 3rem;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const StyledContainer = styled(({ ...props }) => (
  <SectionContainer {...props} />
))`
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  background-image: url("https://github.com/teodorazhelyazkova/services-react-spa/blob/main/public/img/background.png?raw=true");
  background-size: contain;
  background-repeat: no-repeat;
  margin-top: 3rem;
`;
