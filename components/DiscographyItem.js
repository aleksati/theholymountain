import DiscographyItemCover from "./DiscographyItemCover";
import DiscographyItemInfo from "./DiscographyItemInfo";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

const DiscographyItem = ({ item }) => {
  const router = useRouter();
  const handleKeyPress = event => {
    if (event.key === "Enter") {
      router.push(`/${item.key}`);
    }
  };

  return (
    <Link href={`/${item.key}`}>
      <div
        className="relative w-full p-2 transition ease-in-out cursor-pointer hover:scale-[1.01] duration-400"
        tabIndex="0"
        onKeyPress={handleKeyPress}
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
      {/* <div
        tabIndex="0"
        onKeyPress={handleKeyPress}
        className={`flex flex-col cursor-pointer p-4 border rounded-md items-center justify-center border-secondary-skin-light hover:border-secondary hover:dark:border-secondary transistion ease-in-out duration-200 dark:border-secondary-skin-dark space-y-4`}
        aria-label={`${item.title} Music item`}
      >
        <MusicItemCover itemKey={item.key} title={item.title} />
        <MusicItemInfo
          title={item.title}
          category={item.category}
          year={item.year}
        />
      </div> */}
    </Link>
  );
};

export default DiscographyItem;
