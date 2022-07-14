import { useRef, useState } from "react";
import CardReleaseDetails from "./CardReleaseDetails";
import CardReleaseAudio from "./CardReleaseAudio";
import CardReleaseShop from "./CardReleaseShop";
import CardPopup from "./CardPopup";
import Button from "./Button";
import Image from "next/image";
import Card from "./Card";
import Icon from "./Icon";

const CardRelease = ({ release }) => {
  const [isListen, setIsListen] = useState(false);
  const [isDetails, setIsDetails] = useState(false);
  const [isShop, setIsShop] = useState(false);
  const popupRef = useRef(null);

  const handleClickListen = () => setIsListen(prevstate => !prevstate);
  const handleClickDetails = () => setIsDetails(prevstate => !prevstate);
  const handleClickShop = () => setIsShop(prevstate => !prevstate);

  const closePopup = () => {
    setIsDetails(false);
    setIsListen(false);
    setIsShop(false);
  };

  return (
    <div className="place-items-center">
      {isListen || isDetails || isShop ? (
        <CardPopup
          className="max-w-4xl max-h-screen p-4 overflow-auto"
          handleClickOutside={closePopup}
          showCloseButton={true}
          ref={popupRef}
        >
          {isListen ? <CardReleaseAudio url={release.spotifyurl} /> : null}
          {isDetails ? <CardReleaseDetails release={release} /> : null}
          {isShop ? <CardReleaseShop /> : null}
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
            alt={`${release.title} album cover`}
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
                name={`Details about ${release.title} button`}
              >
                <Icon id="details" />
              </Button>
              <Button
                onClick={handleClickListen}
                showTooltip={true}
                tooltipMessage="Listen"
                name={`Listen to ${release.title} button`}
              >
                <Icon id="audio" />
              </Button>
              <Button
                onClick={handleClickShop}
                showTooltip={true}
                tooltipMessage="Shop"
                name={`Buy ${release.title} button`}
              >
                <Icon id="shop" />
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
