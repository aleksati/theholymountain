import Meta from "../Meta";

const PageLayout = ({ children, id, className = "", pageMeta }) => {
  return (
    <>
      <Meta {...pageMeta} />
      <div
        className={`relative w-full min-h-screen dark:bg-primary-dark bg-primary-light ${className}`}
        id={id}
      >
        {children}
      </div>
    </>
  );
};

export default PageLayout;
