import Button from "../Button";
import Link from "next/link";
import Image from "next/image";
import { AiFillPlayCircle } from "react-icons/ai";

const releaseCard = ({ release }) => {
  return (
    <div className="p-4 duration-200 bg-primary-light dark:bg-primary-dark grow">
      <div className="relative justify-center mt-4 mb-4 group">
        <Image
          className="rounded-md shadow-md"
          src={`/img/${release.key}.png`}
          alt={`${release.title} card image`}
          placeholder="blur"
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="contain"
          blurDataURL={`/img/placeholders/${release.key}.png`}
        />
        <div className="absolute inset-0 items-center justify-center hidden rounded-md shadow-md group-hover:flex backdrop-brightness-50">
          <div className="z-50 flex space-x-2 text-size-regular">
            <Link href={`/music/${release.key}`}>
              <Button
                colorStyle={
                  "border-gray-600 hover:border-white text-primary-dark"
                }
              >
                Details
              </Button>
            </Link>
            <Link href={`/music/${release.key}`}>
              <Button
                colorStyle={
                  "border-gray-600 hover:border-white text-primary-dark"
                }
              >
                Listen
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="">
        <h2 className="tracking-tight text-center text-size-regular text-primary-light dark:text-primary-dark">
          {release.title}
        </h2>
        <p className="text-center opacity-60 text-size-small text-secondary-light dark:text-secondary-dark">
          {release.category}
        </p>
      </div>
    </div>
  );
};

export default releaseCard;

// Mer streit som Simon siden:
/* <div className="p-4 duration-200 basis-1/2 md:basis-1/3 lg:basis-1/4 bg-primary-light dark:bg-primary-dark transistion grow">
<div className="mt-6 mb-6">
  <Image
    src={`/img/${release.key}.png`}
    alt={`${release.title} card image`}
    placeholder="blur"
    width="100%"
    height="100%"
    layout="responsive"
    objectFit="contain"
    blurDataURL={`/img/placeholders/${release.key}.png`}
  />
</div>
<div className="space-y-3">
  <h2 className="tracking-tight text-center text-size-regular text-primary-light dark:text-primary-dark">
    {release.title}
  </h2>
  <p className="text-center opacity-60 text-size-small text-secondary-light dark:text-secondary-dark">
    {release.category}
  </p>
  <div className="flex space-x-2 text-size-small place-content-center">
    <Link href={`/music/${release.key}`}>
      <Button>Details</Button>
    </Link>
    <Link href={`/music/${release.key}`}>
      <Button>
        <AiFillPlayCircle />
      </Button>
    </Link>
  </div>
</div>
</div> */

// As Justice / Snapshot cards:
/* <div className="p-6 m-4 duration-200 ease-in-out border border-gray-300 rounded-md basis-1/2 md:basis-1/3 lg:basis-1/4 bg-primary-light dark:bg-primary-dark dark:border-gray-600 hover:border-black hover:dark:border-white transistion grow">
<div className="mt-6 mb-6">
  <Image
    src={`/img/${release.key}.png`}
    alt={`${release.title} card image`}
    placeholder="blur"
    width="100%"
    height="100%"
    layout="responsive"
    objectFit="contain"
    blurDataURL={`/img/placeholders/${release.key}.png`}
  />
</div>
<div className="space-y-2">
  <h2 className="tracking-tight text-center text-size-title text-primary-light dark:text-primary-dark">
    {release.title}
  </h2>
  <p className="text-center opacity-60 font-size-small text-secondary-light dark:text-secondary-dark">
    {release.category} / {release.year}
  </p>
  <div className="flex space-x-2 text-size-small place-content-center">
    <Link href={`/music/${release.key}`}>
      <Button>Details</Button>
    </Link>
    <Link href={`/music/${release.key}`}>
      <Button>
        <AiFillPlayCircle />
      </Button>
    </Link>
  </div>
</div>
</div> */
