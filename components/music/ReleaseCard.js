import Button from "../Button";
import Link from "next/link";

const releaseCard = ({ release }) => {
  return (
    <div className="p-6 m-4 duration-200 ease-in-out border border-gray-300 rounded-lg basis-1/2 md:basis-1/3 lg:basis-1/4 bg-primary-light dark:bg-primary-dark dark:border-gray-600 hover:border-black hover:dark:border-white transistion grow">
      <h2 className="mb-2 tracking-tight text-center text-size-title text-primary-light dark:text-primary-dark">
        {release.title}
      </h2>
      <p className="mb-3 text-center opacity-60 font-size-small text-secondary-light dark:text-secondary-dark">
        {release.category} / {release.year}
      </p>
      <div className="flex place-content-center">
        <Link href={`/music/${release.key}`}>
          <Button>More Details</Button>
        </Link>
      </div>
    </div>
  );
};

export default releaseCard;
