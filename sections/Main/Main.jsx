import Image from "next/image";
import { Cards } from "~/collections/Cards";

import {
  StyledImageContainer,
  StyledTextContainer,
  StyledTitle,
  StyledDescription,
  StyledServicesContainer,
  StyledContainer,
} from "./elements";

export const Main = ({ image, title, description, cardsData }) => {
  console.log(cardsData)
  return (
    <StyledContainer>
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </StyledTextContainer>
      <StyledServicesContainer>
        <StyledImageContainer>
          <Image
            layout="responsive"
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
        </StyledImageContainer>
        <Cards cardsData={cardsData} />
      </StyledServicesContainer>
    </StyledContainer>
  );
};
