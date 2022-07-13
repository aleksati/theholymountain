import Slideshow from "./Slideshow";
import Button from "./Button";

const CardReleaseDetails = ({ release }) => {
  return (
    <div
      id={release.key}
      className="flex flex-col items-center space-y-2 text-size-small sm:text-size-regular sm:space-y-0 sm:flex-row"
    >
      <Slideshow imgSlugs={release.slideshow} />
      <div className="px-4 space-y-2 text-primary-light dark:text-primary-dark">
        <h1 className="text-size-title">{release.title}</h1>
        <p className="text-secondary">
          {release.format} - {release.price} kr
        </p>
        <Button className="w-40 place-content-center">Buy</Button>
        <p>{release.text}</p>
        <div>
          {release.credits.map((credit, index) => (
            <p key={index} className="text-size-small text-secondary">
              {credit}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardReleaseDetails;
