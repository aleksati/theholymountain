import Slideshow from "../Slideshow";
import SoMeBar from "../SoMeBar";

const ModalDetails = ({ album }) => {
  return (
    <div
      className="flex flex-col items-center space-y-2 text-size-small md:text-size-regular md:space-y-0 md:flex-row"
      aria-label={`${album.title} details dialog`}
    >
      <div className="relative p-2 w-96 md:w-3/6">
        <Slideshow imgSlugs={album.slideshow} />
      </div>
      <div className="flex flex-col items-start justify-center h-full px-4 space-y-2 text-primary-light dark:text-primary-dark">
        <h2 className="mb-2 leading-8 text-size-header">
          <b>{album.title.toUpperCase()}</b>
        </h2>
        <p className="text-secondary text-size-small lg:text-size-regular">
          {album.category} / {album.year}
        </p>
        <p>{album.text}</p>
        <div className="text-secondary text-size-small lg:text-size-regular">
          {album.credits.map((credit, index) => (
            <p key={index}>{credit}</p>
          ))}
        </div>
        <SoMeBar
          iconSize="text-2xl sm:text-4xl"
          exclude={["nothing"]}
          className="mt-2"
        />
      </div>
    </div>
  );
};

export default ModalDetails;
