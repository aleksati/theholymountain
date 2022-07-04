const CardReleaseInfo = ({ release }) => (
  <div>
    <h2 className="tracking-tight text-center text-size-regular text-primary-light dark:text-primary-dark">
      {release.title}
    </h2>
    <p className="text-center text-secondary text-size-small">
      {release.category} / {release.year}
    </p>
  </div>
);

export default CardReleaseInfo;
