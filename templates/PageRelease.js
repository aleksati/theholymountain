import PageReleaseAction from "../components/PageReleaseAction";
import PageReleaseAudio from "../components/PageReleaseAudio";
import LikesCounter from "../components/LikesCounter";
import Slideshow from "../components/Slideshow";
import { useEffect } from "react";

const PageRelease = ({ item }) => {
  // force scroll to top.
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [200]);
  }, []);

  return (
    <div
      className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 md:space-y-0"
      aria-label={`${item.title} page`}>
      <div className="order-1 col-span-1">
        <Slideshow imgSlugs={item.slideshow} />
      </div>
      <div className="order-2 col-span-1">
        <div className="flex flex-col px-4 space-y-4 text-primary-light dark:text-primary-dark">
          <div className="mb-4 space-y-2">
            <div className="font-bold leading-8 text-size-header">
              <h1>{item.title.toUpperCase()}</h1>
            </div>
            <div className="flex text-secondary">
              <p>
                {item.category} | {item.year}
              </p>
            </div>
            <div className="flex space-x-2 ">
              <PageReleaseAction item={item} />
              <LikesCounter releaseKey={item.key} />
            </div>
          </div>
          <div className="space-y-2">
            <p>{item.formatText}</p>
            <p>{item.description}</p>
          </div>
          <PageReleaseAudio item={item} />
          <div className="text-secondary text-xs">
            {item.credits.map((credit, index) => (
              <p key={index}>{credit}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageRelease;
