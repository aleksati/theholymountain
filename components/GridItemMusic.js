import { useRouter } from "next/router";
import MyImage from "./MyImage";
import Link from "next/link";

const GridItemMusic = ({ item }) => {
  const router = useRouter();

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      router.push(`/${item.key}`);
    }
  };

  return (
    <div className="p-2" aria-label={item.title}>
      <Link href={`/music/${item.key}`}>
        <div
          className="relative w-full pb-2 cursor-pointer"
          aria-label={`${item.title} Music item`}
          onKeyPress={handleKeyPress}
          role="button"
          tabIndex="0">
          <MyImage
            src={`${item.key}.png`}
            alt={`${item.title} album cover`}
            layout="responsive"
            // isExpandable={true}
          />
        </div>
      </Link>
      <div className="text-center">
        <p>{item.title.toUpperCase()}</p>
        <p className="text-secondary text-sm">
          {item.category} | {item.year}
        </p>
      </div>
    </div>
  );
};

export default GridItemMusic;
