import { useRouter } from "next/router";
import VideoPlayer from "./VideoPlayer";
import Image from "next/image";
import Link from "next/link";

const GridPageMediaItem = ({ item, page }) => {
  const router = useRouter();
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      router.push(`/${item.key}`);
    }
  };

  return page.toLowerCase() === "music"
    ? releaseItem(item, handleKeyPress)
    : videoItem(item);
};

export default GridPageMediaItem;

const releaseItem = (item, onKeyPress) => (
  <div className="p-2">
    <Link href={`/${item.key}`}>
      <div
        className="relative w-full transition ease-in-out pb-2 cursor-pointer hover:scale-[1.005]"
        tabIndex="0"
        onKeyPress={onKeyPress}
        aria-label={`${item.title} Music item`}
      >
        <Image
          className=""
          src={`/img/${item.key}.png`}
          alt={`${item.title} album cover`}
          placeholder="blur"
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="contain"
          blurDataURL={`/img/placeholders/${item.key}.png`}
        />
      </div>
    </Link>
    <div>
      <p>{item.title.toUpperCase()}</p>
      <p className="text-secondary text-size-small">{item.year}</p>
    </div>
  </div>
);

const videoItem = (item) => (
  <div className="p-2">
    <div
      className={`flex flex-col pb-2 items-center justify-center rounded-md space-y-2`}
      aria-label={`${item.title} video grid cell`}
    >
      <div className="relative w-full">
        <VideoPlayer url={item.url} title={item.title} />
      </div>
    </div>
    <div>
      <p>{item.title.toUpperCase()}</p>
      <p className="text-secondary text-size-small">
        {item.year} / {item.category}
      </p>
    </div>
  </div>
);
