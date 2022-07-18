import { Slide } from "react-slideshow-image";
import Image from "next/image";
import Icon from "./Icon";

const indicators = index => (
  <button
    tabIndex="0"
    className="w-2 h-2 m-0.5 bg-gray-300 dark:bg-gray-600 rounded-full cursor-pointer"
  ></button>
);

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
    <button className="text-primary-dark" aria-label="previous slideshow image">
      <Icon id="prevArrow" iconSize={"text-2xl"} />
    </button>
  ),
};

const Slideshow = ({ imgSlugs = [], className }) => {
  return (
    <div className={`w-96 p-2 ${className}`} aria-label="slideshow container">
      <Slide {...properties} indicators={indicators}>
        {imgSlugs.map(slug => (
          <Image
            key={slug}
            src={`/img/${slug}.png`}
            className="bg-transparent rounded-md shadow-md"
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
