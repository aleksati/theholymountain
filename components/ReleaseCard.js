import Link from "next/link";
import MyImage from "./MyImage";
import TextCard from "./TextCard";

export default function ReleaseCard({ releaseKey, release }) {
  return (
    <Link href={`/music/${releaseKey}`}>
      <article className="mx-2 h-full overflow-hidden rounded-md border border-secondary-skin-dark hover:border-secondary hover:dark:border-secondary transition-colors duration-300 ease-in-out hover:cursor-pointer">
        <TextCard>
          <div className="space-y-3">
            <MyImage
              src={release.coverImage}
              alt={`${release.title} cover`}
              width={800}
              height={800}
              layout="responsive"
              objectFit="contain"
            />
            <div className="flex flex-col items-center space-y-0 text-center">
              <p className="text-size-title font-bold leading-tight uppercase">{release.title}</p>
              <p className="text-size-small md:text-size-regular">
                {release.category} • {release.year}
              </p>
            </div>
          </div>
        </TextCard>
      </article>
    </Link>
  );
}
