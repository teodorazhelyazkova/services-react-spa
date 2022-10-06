import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import Image from "next/image";

import {
  StyledTitle,
  StyledDescription,
  StyledIconContainer,
  StyledCardContainer,
  StyledTextContainer,
} from "./elements";

export const Card = ({ image, title, description, position }) => {
  return (
    <StyledCardContainer position={position}>
      <StyledIconContainer>
        <Image
          layout="intrinsic"
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
      </StyledIconContainer>
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </StyledTextContainer>
    </StyledCardContainer>
  );
};
