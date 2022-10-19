import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import Image from "next/image";
import Icon from "./Icon";

const indicators = (index) => (
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
      <Icon id="prevArrow" iconSize={"text-4xl md:text-4xl"} />
    </button>
  ),
};

const Slideshow = ({ imgSlugs = [] }) => {
  return (
    <div className="relative w-full" aria-label="slideshow container">
      {imgSlugs.length > 1 ? (
        <Slide {...properties} indicators={indicators}>
          {imgSlugs.map((slug) => (
            <Image
              key={slug}
              src={`/img/${slug}.png`}
              className="backdrop-brightness-95 dark:backdrop-brightness-110"
              alt={`slideshow image of ${slug}`}
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
              blurDataURL={`/img/placeholders/${slug}.png`}
            />
          ))}
        </Slide>
      ) : (
        <Image
          key={imgSlugs[0]}
          src={`/img/${imgSlugs[0]}.png`}
          // className="rounded-md"
          alt={`slideshow image of ${imgSlugs[0]}`}
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="contain"
          blurDataURL={`/img/placeholders/${imgSlugs[0]}.png`}
        />
      )}
    </div>
  );
};

export default Slideshow;
