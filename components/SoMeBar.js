import Icon from "./Icon";

const SoMeBar = ({ iconSize, exclude = [], className }) => {
  const some = [
    {
      key: "facebook",
      url: "https://www.facebook.com/theholymountaintrio",
    },
    {
      key: "instagram",
      url: "https://www.instagram.com/theholymountaintrio/",
    },
    {
      key: "bandcamp",
      url: "https://theholymountain.bandcamp.com/",
    },
    {
      key: "youtube",
      url: "https://www.youtube.com/channel/UCdjPuoIdC6-EDb_tR5h9ayg",
    },
    {
      key: "spotify",
      url: "https://open.spotify.com/artist/04GXo6z6x1KLMG9weDPayK?si=rzFLNrlkTvml0zaKqo_tuQ",
    },
  ];

  return (
    <div className={`flex flex-row ${className}`}>
      {some.map(some => {
        if (exclude.includes(some.key)) return;
        return (
          <a
            key={some.key}
            href={some.url}
            className="transition duration-200 ease-in-out hover:scale-105"
          >
            <Icon id={some.key} iconSize={iconSize} />
          </a>
        );
      })}
    </div>
  );
};

export default SoMeBar;
