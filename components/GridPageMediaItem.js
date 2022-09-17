import { useRouter } from "next/router";
import VideoPlayer from "./VideoPlayer";
import Image from "next/image";
import Link from "next/link";

const GridPageMediaItem = ({ item, page }) => {
  const router = useRouter();
  const handleKeyPress = event => {
    if (event.key === "Enter") {
      router.push(`/${item.key}`);
    }
  };

  return page.toLowerCase() === "discography"
    ? releaseItem(item, handleKeyPress)
    : videoItem(item);
};

export default GridPageMediaItem;

const releaseItem = (item, onKeyPress) => (
  <Link href={`/${item.key}`}>
    <div
      className="relative w-full p-2 transition ease-in-out cursor-pointer hover:scale-[1.01] duration-400"
      tabIndex="0"
      onKeyPress={onKeyPress}
      aria-label={`${item.title} Music item`}
    >
      <Image
        className="rounded-md backdrop-brightness-75"
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
);

const videoItem = item => (
  <div
    className={`flex flex-col p-2 items-center justify-center rounded-md space-y-2`}
    aria-label={`${item.title} video grid cell`}
  >
    <div className="relative w-full">
      <VideoPlayer url={item.url} title={item.title} />
    </div>

    <div className="leading-8 text-center">
      <h2 className="text-size-title">
        <b>{item.title.toUpperCase()}</b>
      </h2>
      <p className="text-secondary">
        {item.category} / {item.year}
      </p>
    </div>
  </div>
);
