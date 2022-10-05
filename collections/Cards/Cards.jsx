import { Card } from "../Card";
export const Cards = (props) => {
  return (
    <div>
      {props.cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};
