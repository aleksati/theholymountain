import Slideshow from "../Slideshow";

const ModalDetails = ({ album, label }) => {
  return (
    <div
      className="flex flex-col items-center space-y-2 text-size-small md:text-size-regular sm:space-y-0 sm:flex-row"
      aria-label={`${label} details dialog`}
    >
      <Slideshow imgSlugs={album.slideshow} />
      <div className="px-4 space-y-2 text-primary-light dark:text-primary-dark">
        <h2 className="text-size-header">
          <b>{album.title.toUpperCase()}</b>
        </h2>
        <p className="text-secondary text-size-small">
          {album.category} / {album.year}
        </p>
        <p>{album.text}</p>
        <div className="text-size-small text-secondary">
          {album.credits.map((credit, index) => (
            <p key={index}>{credit}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModalDetails;
