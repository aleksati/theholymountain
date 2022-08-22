import MusicAudio from "../components/Music/MusicAudio";
import PageLayout from "../components/Page/PageLayout";
import Slideshow from "../components/Slideshow";
import Shop from "../components/Music/Shop";

const MusicPage = ({ item, meta }) => {
  return (
    <PageLayout pageMeta={meta} border={false}>
      <div
        className="grid min-h-screen grid-cols-1 gap-6 p-4 pb-12 md:pb-0 md:grid-cols-2 md:space-y-0"
        aria-label={`${item.title} page`}
      >
        <div className="col-span-1">
          <Slideshow imgSlugs={item.slideshow} />
        </div>
        <div className="col-span-1">
          <div className="flex flex-col px-4 space-y-2 text-primary-light dark:text-primary-dark">
            <div className="font-normal leading-8 text-size-header">
              <h2>{item.title.toUpperCase()}</h2>
            </div>
            <div className="text-secondary">
              <p>
                {item.category} / {item.year}
              </p>
            </div>
            <div>
              <Shop />
            </div>
            <div>
              <p>{item.text}</p>
            </div>
            <MusicAudio item={item} />
            <div className="text-secondary">
              {item.credits.map((credit, index) => (
                <p key={index}>{credit}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default MusicPage;
