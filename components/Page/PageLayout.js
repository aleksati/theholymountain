import Meta from "../Meta";

const PageLayout = ({ children, id, className, pageMeta, border = true }) => {
  const borderTop =
    "border-t border-secondary-skin-light dark:border-secondary-skin-dark";
  return (
    <>
      <Meta {...pageMeta} />
      <div
        className={`relative min-h-screen container mx-auto ${
          border ? borderTop : null
        } ${className}`}
        id={id}
      >
        {children}
      </div>
    </>
  );
};

export default PageLayout;
