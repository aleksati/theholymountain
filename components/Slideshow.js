import { Slide } from "react-slideshow-image";
import Image from "next/image";
import Icon from "./Icon";

const properties = {
  autoplay: false,
  canSwipe: true,
  indicators: true,
  transitionDuration: 200,
  defaultIndex: 2,
  nextArrow: (
    <button className="text-primary-dark">
      <Icon id="nextArrow" iconSize={"text-xl"} />
    </button>
  ),
  prevArrow: (
    <button className="text-primary-dark">
      <Icon id="prevArrow" iconSize={"text-xl"} />
    </button>
  ),
};

const Slideshow = ({ imgSlugs = [], className }) => (
  <div className={`w-96 p-2 ${className}`}>
    <Slide {...properties}>
      {imgSlugs.map(slug => (
        <Image
          key={slug}
          src={`/img/${slug}.png`}
          className="rounded-md shadow-md"
          alt={`slideshow image of release, ${slug}`}
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

export default Slideshow;
