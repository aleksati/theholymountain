import { useRef, useState } from "react";
import CardReleaseDetails from "./CardReleaseDetails";
import CardReleaseAudio from "./CardReleaseAudio";
import CardPopup from "./CardPopup";
import Button from "./Button";
import Image from "next/image";
import Card from "./Card";
import Icon from "./Icon";

const CardRelease = ({ release }) => {
  const [isListen, setIsListen] = useState(false);
  const [isDetails, setIsDetails] = useState(false);
  const popupRef = useRef(null);

  const handleClickListen = () => setIsListen(prevstate => !prevstate);
  const handleClickDetails = () => setIsDetails(prevstate => !prevstate);
  const closePopup = () => {
    setIsDetails(false);
    setIsListen(false);
  };

  return (
    <div className="place-items-center">
      {isListen || isDetails ? (
        <CardPopup
          className="max-w-4xl max-h-screen p-4 overflow-auto"
          handleClickOutside={closePopup}
          showCloseButton={true}
          ref={popupRef}
        >
          {isListen ? (
            <CardReleaseAudio url={release.spotifyurl} />
          ) : (
            <CardReleaseDetails release={release} />
          )}
        </CardPopup>
      ) : null}
      <Card
        showCloseButton={false}
        showShadow={false}
        className="mt-4 mb-4"
        maxWidth="override"
      >
        <div className="relative">
          <Image
            className="rounded-md shadow-md"
            src={`/img/${release.key}.png`}
            alt={`${release.title} cover`}
            placeholder="blur"
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
            blurDataURL={`/img/placeholders/${release.key}.png`}
          />
          <div className="absolute inset-0 flex items-center justify-center transition duration-200 ease-in-out rounded-md shadow-md opacity-0 hover:opacity-100 backdrop-brightness-50">
            <div className="flex space-x-2 text-size-regular">
              <Button
                onClick={handleClickDetails}
                showTooltip={true}
                tooltipMessage="Details"
              >
                <Icon id="details" />
              </Button>
              <Button
                onClick={handleClickListen}
                showTooltip={true}
                tooltipMessage="Listen"
              >
                <Icon id="audio" />
              </Button>
            </div>
          </div>
        </div>
      </Card>
      <div>
        <h2 className="tracking-tight text-center text-size-title text-primary-light dark:text-primary-dark">
          {release.title}
        </h2>
        <p className="text-center text-secondary text-size-regular">
          {release.category} / {release.year}
        </p>
      </div>
    </div>
  );
};

export default CardRelease;

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
