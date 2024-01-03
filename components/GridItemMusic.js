import { useRouter } from "next/router";
import MyImage from "./MyImage";
import Link from "next/link";

const GridItemMusic = ({ releaseKey, title, category, year }) => {
  const router = useRouter();

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      router.push(`/music/${releaseKey}`);
    }
  };

  return (
    <div className="p-2" aria-label={title}>
      <Link href={`/music/${releaseKey}`}>
        <div
          className="relative w-full pb-2 cursor-pointer"
          aria-label={`${title} release item`}
          onKeyPress={handleKeyPress}
          role="button">
          <MyImage
            src={`${releaseKey}.jpg`}
            alt={`${title} album cover`}
            layout="responsive"
          />
        </div>
      </Link>
      <div className="text-center">
        <p>{title.toUpperCase()}</p>
        <p className="text-secondary text-sm">
          {category} | {year}
        </p>
      </div>
    </div>
  );
};

export default GridItemMusic;
