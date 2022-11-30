import { useRouter } from "next/router";
import VideoPlayer from "./VideoPlayer";
import Image from "next/image";
import Link from "next/link";

const PageMediaGridItem = ({ item, type }) => {
  const router = useRouter();

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      router.push(`/${item.key}`);
    }
  };

  switch (type) {
    case "music":
      return musicItem(item, handleKeyPress);
    case "video":
      return videoItem(item);
    default:
      return null;
  }
};

export default PageMediaGridItem;

const musicItem = (item, onKeyPress) => (
  <div className="p-2" aria-label={item.title}>
    <Link href={`/${item.key}`}>
      <div
        className="relative w-full pb-2 duration-200 ease-in-out cursor-pointer hover:brightness-90 transistion"
        aria-label={`${item.title} Music item`}
        onKeyPress={onKeyPress}
        role="button"
        tabIndex="0"
      >
        <Image
          // className="rounded-md"
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
    <div className="text-center">
      <p>
        <b>{item.title.toUpperCase()}</b>
      </p>
      <p className="text-secondary text-size-small">
        {item.category} | {item.year}
      </p>
    </div>
  </div>
);

const videoItem = (item) => (
  <div className="p-2" aria-label={item.title}>
    <div
      className={`flex flex-col pb-2 items-center justify-center rounded-md space-y-2`}
      aria-label={`${item.title} video grid cell`}
    >
      <div className="relative w-full">
        <VideoPlayer url={item.url} title={item.title} />
      </div>
    </div>
    <div className="text-center">
      <p>
        <b>{item.title.toUpperCase()}</b>
      </p>
      <p className="text-secondary text-size-small">
        {item.category} | {item.year}
      </p>
    </div>
  </div>
);
