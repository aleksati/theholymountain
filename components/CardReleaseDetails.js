import Slideshow from "./Slideshow";
import Button from "./Button";

const CardReleaseDetails = ({ release }) => {
  return (
    <div
      id={release.key}
      className="flex flex-col items-center space-y-2 text-size-small md:text-size-regular sm:space-y-0 sm:flex-row"
    >
      <Slideshow imgSlugs={release.slideshow} />
      <div className="px-4 space-y-2 text-primary-light dark:text-primary-dark">
        <h1 className="text-size-header">{release.title}</h1>
        <p className="text-secondary">
          {/* {release.formats[0]} and {release.formats[1]} */}
          {release.category} / {release.year}
        </p>
        <p>{release.text}</p>
        <div>
          <p>Avaliable on:</p>
          <ul className="ml-5 list-disc">
            {release.formats.map(format => (
              <li key={format}>{format}</li>
            ))}
          </ul>
        </div>
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
