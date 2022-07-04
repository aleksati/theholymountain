import { useRef, useState } from "react";
import CardReleasePhoto from "./CardReleasePhoto";
import CardReleaseInfo from "./CardReleaseInfo";
import AudioPlayer from "./AudioPlayer";
import CardPopup from "./CardPopup";
import Card from "./Card";

const releaseCard = ({ release }) => {
  const [isListen, setIsListen] = useState(false);
  const toggleRef = useRef(null);
  const popupRef = useRef(null);

  const handleClick = () => setIsListen(prevstate => !prevstate);

  return (
    <div>
      <CardPopup
        handleClickOutside={handleClick}
        condition={isListen}
        toggleRef={toggleRef}
        ref={popupRef}
      >
        <AudioPlayer className={"p-4"} />
      </CardPopup>
      <Card showCloseButton={false} showShadow={false}>
        <CardReleasePhoto
          ref={toggleRef}
          release={release}
          onClick={handleClick}
        />
        <CardReleaseInfo release={release} />
      </Card>
    </div>
  );
};

export default releaseCard;

// Mer streit som Simon siden:
/* <div className="p-4 duration-200 basis-1/2 md:basis-1/3 lg:basis-1/4 bg-primary-light dark:bg-primary-dark transistion grow">
<div className="mt-6 mb-6">
  <Image
    src={`/img/${release.key}.png`}
    alt={`${release.title} card image`}
    placeholder="blur"
    width="100%"
    height="100%"
    layout="responsive"
    objectFit="contain"
    blurDataURL={`/img/placeholders/${release.key}.png`}
  />
</div>
<div className="space-y-3">
  <h2 className="tracking-tight text-center text-size-regular text-primary-light dark:text-primary-dark">
    {release.title}
  </h2>
  <p className="text-center opacity-60 text-size-small text-secondary-light dark:text-secondary-dark">
    {release.category}
  </p>
  <div className="flex space-x-2 text-size-small place-content-center">
    <Link href={`/music/${release.key}`}>
      <Button>Details</Button>
    </Link>
    <Link href={`/music/${release.key}`}>
      <Button>
        <AiFillPlayCircle />
      </Button>
    </Link>
  </div>
</div>
</div> */

// As Justice / Snapshot cards:
/* <div className="p-6 m-4 duration-200 ease-in-out border border-gray-300 rounded-md basis-1/2 md:basis-1/3 lg:basis-1/4 bg-primary-light dark:bg-primary-dark dark:border-gray-600 hover:border-black hover:dark:border-white transistion grow">
<div className="mt-6 mb-6">
  <Image
    src={`/img/${release.key}.png`}
    alt={`${release.title} card image`}
    placeholder="blur"
    width="100%"
    height="100%"
    layout="responsive"
    objectFit="contain"
    blurDataURL={`/img/placeholders/${release.key}.png`}
  />
</div>
<div className="space-y-2">
  <h2 className="tracking-tight text-center text-size-title text-primary-light dark:text-primary-dark">
    {release.title}
  </h2>
  <p className="text-center opacity-60 font-size-small text-secondary-light dark:text-secondary-dark">
    {release.category} / {release.year}
  </p>
  <div className="flex space-x-2 text-size-small place-content-center">
    <Link href={`/music/${release.key}`}>
      <Button>Details</Button>
    </Link>
    <Link href={`/music/${release.key}`}>
      <Button>
        <AiFillPlayCircle />
      </Button>
    </Link>
  </div>
</div>
</div> */
