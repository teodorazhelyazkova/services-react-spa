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

const cardsData = [
  {
    image: { src: "/img/sampleIcon.svg", alt: "", width: 50, height: 50 },
    title: "Brief",
    description: [
      "Complete ",
      <strong key="">brief writing or simple guidance</strong>,
      " on what to include, we've got you covered.",
    ],
  },
  {
    image: { src: "/img/sampleIcon.svg", alt: "", width: 50, height: 50 },
    title: "Search",
    description: [
      "In-depth agency search covering: ",
      <strong key="">criteria matching</strong>,
      " door knocking and due-dilligence vetting.",
    ],
  },
  {
    image: { src: "/img/sampleIcon.svg", alt: "", width: 50, height: 50 },
    title: "Pitch",
    description: [
      "Comprehensive ",
      <strong key="">pitch management</strong>,
      " including comms, diary management and pitch hosting.",
    ],
  },
];

export const Main = ({ image, title, description }) => {
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
