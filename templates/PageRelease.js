import AudioPageRelease from "../components/AudioPageRelease";
import LikesCounter from "../components/LikesCounter";
import ButtonShop from "../components/ButtonShop";
import Slideshow from "../components/Slideshow";
import LayoutPage from "../layouts/LayoutPage";

const PageRelease = ({ item }) => (
  <LayoutPage border={false} className="px-12">
    <div
      className="grid min-h-screen grid-cols-1 gap-6 md:border border-secondary-skin-dark dark:border-text-secondary md:p-14 md:pb-0 md:grid-cols-2 md:space-y-0"
      aria-label={`${item.title} page`}
    >
      <div className="order-1 col-span-1">
        <Slideshow imgSlugs={item.slideshow} />
      </div>
      <div className="order-2 col-span-1">
        <div className="flex flex-col px-4 space-y-4 text-primary-light dark:text-primary-dark">
          <div className="mb-4 space-y-2">
            <div className="font-bold leading-8 text-size-header">
              <h2>{item.title.toUpperCase()}</h2>
            </div>
            <div className="flex text-secondary">
              <p>
                {item.category} | {item.year}
              </p>
            </div>
            <div className="flex space-x-2 ">
              <ButtonShop />
              <LikesCounter releaseKey={item.key} />
            </div>
          </div>
          <div className="space-y-2">
            <p>{item.formatText}</p>
            <p>{item.description}</p>
          </div>
          <AudioPageRelease item={item} />
          <div className="text-secondary text-size-small">
            {item.credits.map((credit, index) => (
              <p key={index}>{credit}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  </LayoutPage>
);

export default PageRelease;
