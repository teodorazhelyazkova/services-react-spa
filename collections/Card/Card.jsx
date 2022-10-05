import Image from "next/image";

export const Card = ({ image, title, description }) => {
  return (
    <div>
      <Image
        layout="responsive"
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
      />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};
