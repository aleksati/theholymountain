import Link from "next/link";

const Music = ({ musicData }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen dark:bg-primary-dark bg-primary-light">
      <h1 className="text-size-header-big text-primary-light dark:text-primary-dark">
        Music
      </h1>
      {musicData.map(title => (
        <div key={title.key}>
          <h1 className="text-size-title text-primary-light dark:text-primary-dark">
            {title.title}
          </h1>
          <p className="p-4 text-size-regular text-secondary-light dark:text-secondary-dark">
            <Link href={`/music/${title.key}`}>{title.text}</Link>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Music;
