import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

const PageMediaGridItemMusic = ({ item }) => {
  const router = useRouter();

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      router.push(`/${item.key}`);
    }
  };

  return (
    <div className="p-2" aria-label={item.title}>
      <Link href={`/${item.key}`}>
        <div
          className="relative w-full pb-2 duration-200 ease-in-out cursor-pointer hover:brightness-90 transistion"
          aria-label={`${item.title} Music item`}
          onKeyPress={handleKeyPress}
          role="button"
          tabIndex="0">
          <Image
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
};

export default PageMediaGridItemMusic;
