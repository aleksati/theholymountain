const TitlePageMedia = ({ title }) => (
  <h1
    aria-label="Media page title"
    className="mt-4 mb-4 overflow-hidden font-normal text-center text-clip text-size-header-big"
  >
    {title.toUpperCase()}
  </h1>
);

export default TitlePageMedia;
