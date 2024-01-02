import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
// import Image from "next/image";
import Icon from "./Icon";
import MyImage from "./MyImage";

// also includes som css in the global CSS for the indicators
// DOC - https://react-slideshow-image.netlify.app/

const indicators = (index) => (
  <button
    tabIndex="0"
    className="w-2 h-2 mx-0.5 -mt-2 bg-secondary rounded-full"></button>
);

const properties = {
  autoplay: false,
  canSwipe: true,
  indicators: true,
  transitionDuration: 200,
  defaultIndex: 0,
  // cssClass: "flex flex-col",
  nextArrow: (
    <button
      className="text-primary-dark brightness-50"
      aria-label="next slideshow image">
      <Icon id="nextArrow" />
    </button>
  ),
  prevArrow: (
    <button
      className="text-primary-dark brightness-50"
      aria-label="previous slideshow image">
      <Icon id="prevArrow" />
    </button>
  ),
};

const MySlideshow = ({
  imgs = [],
  captions = [],
  width = null,
  priority = false,
}) => {
  // const w = width ? `w-[${width}px]` : null;
  return (
    <div className="relative w-full" aria-label="slideshow container">
      {imgs.length > 1 ? (
        <Slide {...properties} indicators={indicators}>
          {imgs.map((slug, index) => (
            <MyImage
              src={slug}
              priority={priority}
              alt={`slideshow image of ${slug}`}
              caption={captions ? captions[index] : null}
              width={width ? width : null}
              layout="responsive"
              key={slug}
            />
            // <Image
            //   blurDataURL={`/img/placeholders/${slug}.png`}
            //   alt={`slideshow image of ${slug}`}
            //   src={`/img/${slug}.png`}
            //   layout="responsive"
            //   objectFit="contain"
            //   height="100%"
            //   width="100%"
            //   key={slug}
            //   priority
            // />
          ))}
        </Slide>
      ) : (
        <MyImage
          priority={priority}
          src={imgs[0]}
          alt={`slideshow image of ${imgs[0]}`}
          width={width ? width : null}
        />
        // <Image
        //   key={imgSlugs[0]}
        //   src={`/img/${imgSlugs[0]}.png`}
        //   alt={`slideshow image of ${imgSlugs[0]}`}
        //   width="100%"
        //   height="100%"
        //   layout="responsive"
        //   objectFit="contain"
        //   blurDataURL={`/img/placeholders/${imgSlugs[0]}.png`}
        //   priority
        // />
      )}
    </div>
  );
};

export default MySlideshow;
