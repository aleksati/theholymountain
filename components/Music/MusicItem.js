import MusicItemCover from "./MusicItemCover";
import MusicItemInfo from "./MusicItemInfo";
import { useRouter } from "next/router";
import Link from "next/link";

const MusicItem = ({ item }) => {
  const router = useRouter();
  const handleKeyPress = event => {
    if (event.key === "Enter") {
      router.push(`/${item.key}`);
    }
  };

  return (
    <Link href={`/${item.key}`}>
      <div
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
      </div>
    </Link>
  );
};

export default MusicItem;
