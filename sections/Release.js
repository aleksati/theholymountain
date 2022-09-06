import AudioRelease from "../components/AudioRelease";
import LayoutPage from "../components/LayoutPage";
import Slideshow from "../components/Slideshow";
import LikesCounter from "./LikesCounter";
import ButtonShop from "../components/ButtonShop";

const Release = ({ item, meta }) => {
  return (
    <LayoutPage pageMeta={meta} border={false}>
      <div
        className="grid min-h-screen grid-cols-1 gap-6 p-4 pb-12 md:pb-0 md:grid-cols-2 md:space-y-0"
        aria-label={`${item.title} page`}
      >
        <div className="col-span-1">
          <Slideshow imgSlugs={item.slideshow} />
        </div>
        <div className="col-span-1">
          <div className="flex flex-col px-4 space-y-4 text-primary-light dark:text-primary-dark">
            <div className="mb-4 space-y-2">
              <div className="font-normal leading-8 text-size-header">
                <h2>{item.title.toUpperCase()}</h2>
              </div>
              <div className="flex text-secondary">
                <p>
                  {item.category} | {item.year}
                </p>
              </div>
              <div className="flex space-x-2">
                <ButtonShop />
                <LikesCounter releaseKey={item.key} />
              </div>
            </div>
            <div className="space-y-2">
              <p>{item.formatText}</p>
              <p>{item.description}</p>
            </div>
            <AudioRelease item={item} />
            <div className="text-secondary">
              {item.credits.map((credit, index) => (
                <p key={index}>{credit}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
};

export default Release;
