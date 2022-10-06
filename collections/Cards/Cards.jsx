import { Card } from "../Card";

import { StyledCardsContainer } from "./elements";

export const Cards = (props) => {
  return (
    <StyledCardsContainer>
      {props.cardsData.map((card, index) => (
        <Card key={index} {...card} position={index} />
      ))}
    </StyledCardsContainer>
  );
};
