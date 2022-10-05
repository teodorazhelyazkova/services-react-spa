import Image from "next/image";
import { Cards } from "../../collections/Cards";

const cardsData = [
  {
    image: { src: "/img/sampleIcon.svg", alt: "", width: 30, height: 30 },
    title: "Brief",
    description:
      "Complete brief writing or simple guidance on what to include, we've got you covered.",
  },
  {
    image: { src: "/img/sampleIcon.svg", alt: "", width: 30, height: 30 },
    title: "Search",
    description:
      "In-depth agency search covering: criteria matching, door knocking and due-dilligence vetting.",
  },
  {
    image: { src: "/img/sampleIcon.svg", alt: "", width: 30, height: 30 },
    title: "Pitch",
    description:
      "Comprehensive pitch management, including comms, diary management and pitch hosting.",
  },
];

export const Main = ({ image, title, description }) => {
  return (
    <div>
      <div>
        <Image
          layout="responsive"
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
      </div>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <Cards cardsData={cardsData} />
    </div>
  );
};
