import Slideshow from "../Slideshow";
import SoMeBar from "../SoMeBar";

const ModalDetails = ({ album }) => {
  return (
    <div
      className="flex flex-col items-center space-y-2 text-size-small md:text-size-regular md:space-y-0 md:flex-row"
      aria-label={`${album.title} details dialog`}
    >
      <Slideshow imgSlugs={album.slideshow} />
      <div className="flex flex-col items-start justify-center h-full px-4 space-y-3 text-primary-light dark:text-primary-dark">
        <div className="font-normal leading-8 text-size-header">
          <h2>{album.title.toUpperCase()}</h2>
        </div>
        <div className="flex md:hidden lg:flex text-secondary text-size-small lg:text-size-regular">
          <p>
            {album.category} / {album.year}
          </p>
        </div>
        <div className="block w-full md:hidden lg:block">
          <SoMeBar iconSize="text-xl" exclude={["spotify"]} />
        </div>
        <div>
          <p>{album.text}</p>
        </div>
        <div className="w-full" tabIndex="0">
          <iframe
            className="rounded-md"
            src={album.spotifyurl}
            loading="lazy"
            width="100%"
            height="200px"
          ></iframe>
        </div>
        {/* <div className="block md:hidden lg:block text-secondary text-size-small">
          {album.credits.map((credit, index) => (
            <p key={index}>{credit}</p>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default ModalDetails;
