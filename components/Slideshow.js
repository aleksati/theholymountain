import { Slide } from "react-slideshow-image";
import Image from "next/image";
import Icon from "./Icon";

const Slideshow = ({ imgSlugs = [], className }) => {
  const properties = {
    autoplay: false,
    canSwipe: true,
    indicators: true,
    transitionDuration: 200,
    defaultIndex: 2,
    nextArrow: (
      <button className="text-primary-dark" aria-label="next slideshow image">
        <Icon id="nextArrow" iconSize={"text-2xl"} />
      </button>
    ),
    prevArrow: (
      <button
        className="text-primary-dark"
        aria-label="previous slideshow image"
      >
        <Icon id="prevArrow" iconSize={"text-2xl"} />
      </button>
    ),
  };

  return (
    <div className={`w-96 p-2 ${className}`} aria-label={`slideshow`}>
      <Slide {...properties}>
        {imgSlugs.map(slug => (
          <Image
            key={slug}
            src={`/img/${slug}.png`}
            className="rounded-md shadow-md"
            alt={`slideshow image of release; ${slug}`}
            width="600px"
            height="600px"
            layout="responsive"
            objectFit="contain"
            blurDataURL={`/img/placeholders/${slug}.png`}
            priority
          />
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
