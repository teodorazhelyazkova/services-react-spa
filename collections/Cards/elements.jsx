import styled from "styled-components";

export const StyledCardsContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  

  @media (min-width: 1024px) {
   gap: 0;
   justify-content: space-evenly;
  }
`;
