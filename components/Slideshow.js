import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import Image from "next/image";
import Icon from "./Icon";

const indicators = index => (
  <button
    tabIndex="0"
    className="w-2 h-2 m-0.5 bg-secondary rounded-full"
  ></button>
);

const properties = {
  autoplay: false,
  canSwipe: true,
  indicators: true,
  transitionDuration: 200,
  nextArrow: (
    <button className="text-primary-dark" aria-label="next slideshow image">
      <Icon id="nextArrow" iconSize={"text-4xl md:text-4xl"} />
    </button>
  ),
  prevArrow: (
    <button className="text-primary-dark" aria-label="previous slideshow image">
      <Icon id="prevArrow" iconSize={"text-3xl md:text-4xl"} />
    </button>
  ),
};

const Slideshow = ({ imgSlugs = [] }) => {
  return (
    <div className="relative p-2 w-96 md:w-3/6">
      <div className={`w-full`} aria-label="slideshow container">
        <Slide {...properties} indicators={indicators}>
          {imgSlugs.map(slug => (
            <Image
              key={slug}
              src={`/img/${slug}.png`}
              className="rounded-md shadow-md"
              alt={`slideshow image of release; ${slug}`}
              width="100%"
              height="100%"
              layout="responsive"
              blurDataURL={`/img/placeholders/${slug}.png`}
            />
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default Slideshow;
