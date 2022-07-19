import Meta from "../Meta";

const PageLayout = ({ children, id, className = "", pageMeta }) => {
  return (
    <>
      <Meta {...pageMeta} />
      <div
        className={`relative w-full min-h-screen text-size-regular text-primary-light dark:text-primary-dark bg-primary-light dark:bg-primary-dark ${className}`}
        id={id}
      >
        {children}
      </div>
    </>
  );
};

export default PageLayout;
