import { Slide } from "react-slideshow-image";
import Image from "next/image";
import Button from "./Button";
import Icon from "./Icon";

const properties = {
  autoplay: false,
  canSwipe: true,
  indicators: true,
  transitionDuration: 200,
  defaultIndex: 2,
  prevArrow: (
    <Button>
      <Icon id="prevArrow" />
    </Button>
  ),
  nextArrow: (
    <Button>
      <Icon id="nextArrow" />
    </Button>
  ),
};

const Slideshow = ({ imgSlugs = [], className }) => (
  <div className={`w-96 ${className}`}>
    <Slide {...properties}>
      {imgSlugs.map(slug => (
        <Image
          key={slug}
          src={`/img/${slug}.png`}
          className="rounded-md shadow-md"
          alt={`${slug} slide`}
          width="500px"
          height="500px"
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
