import { FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";
import { FaBandcamp } from "react-icons/fa";

const SoMeBar = ({ iconSize, excludes = [], className }) => {
  const some = [
    {
      key: "facebook",
      url: "https://www.facebook.com/theholymountaintrio",
      html: <FiFacebook className={`${iconSize}`} />,
    },
    {
      key: "instagram",
      url: "https://www.instagram.com/theholymountaintrio/",
      html: <FiInstagram className={`${iconSize}`} />,
    },
    {
      key: "bandcamp",
      url: "https://theholymountain.bandcamp.com/",
      html: <FaBandcamp className={`${iconSize}`} />,
    },
    {
      key: "youtube",
      url: "https://www.youtube.com/channel/UCdjPuoIdC6-EDb_tR5h9ayg",
      html: <FiYoutube className={`${iconSize}`} />,
    },
  ];

  return (
    <div className={`flex flex-row justify-around ${className}`}>
      {some.map(some => {
        if (excludes.includes(some.key)) return;
        return (
          <a key={some.key} href={some.url}>
            {some.html}
          </a>
        );
      })}
    </div>
  );
};

export default SoMeBar;
