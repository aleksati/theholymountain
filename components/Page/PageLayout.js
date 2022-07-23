import Meta from "../Meta";

const PageLayout = ({ children, id, className, pageMeta }) => {
  return (
    <>
      <Meta {...pageMeta} />
      <div
        className={`relative min-h-screen container mx-auto ${className}`}
        id={id}
      >
        {children}
      </div>
    </>
  );
};

export default PageLayout;
