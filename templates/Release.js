import ReleaseActions from "../components/ReleaseActions";
import ReleaseAudio from "../components/ReleaseAudio";
// import Slideshow from "../components/Slideshow";
import { useEffect } from "react";

const Release = ({ item }) => {
  // force scroll to top.
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [200]);
  }, []);

  return (
    <div
      className="grid grid-cols-1 gap-4 p-4 md:space-y-0"
      aria-label={`${item.title} page`}>
      <div className="order-1 col-span-1">
        <ReleaseAudio item={item} />
        {/* <Slideshow imgSlugs={item.slideshow} /> */}
      </div>
      <div className="order-2 col-span-1">
        <div className="flex flex-col px-4 space-y-4 text-primary-light dark:text-primary-dark">
          <div className="space-y-2">
            {/* <div className="font-bold leading-8 text-size-header">
              <h1>{item.title.toUpperCase()}</h1>
              </div>
              <div className="text-secondary">
              <p>
              {item.category} | {item.year}
              </p>
            </div> */}
            <ReleaseActions item={item} />
            <div className="text-secondary">
              {item.credits.map((credit, index) => (
                <p key={index}>{credit}</p>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <p>{item.description}</p>
            <p>{item.formatText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Release;
