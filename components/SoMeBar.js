import { FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";
import { FaBandcamp } from "react-icons/fa";

import { BsFacebook } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";

const SoMeBar = ({ iconSize, excludes = [], className }) => {
  const some = [
    {
      key: "facebook",
      url: "https://www.facebook.com/theholymountaintrio",
      html: <BsFacebook className={`${iconSize}`} />,
    },
    {
      key: "instagram",
      url: "https://www.instagram.com/theholymountaintrio/",
      html: <RiInstagramFill className={`${iconSize}`} />,
    },
    {
      key: "bandcamp",
      url: "https://theholymountain.bandcamp.com/",
      html: <FaBandcamp className={`${iconSize}`} />,
    },
    {
      key: "youtube",
      url: "https://www.youtube.com/channel/UCdjPuoIdC6-EDb_tR5h9ayg",
      html: <AiFillYoutube className={`${iconSize}`} />,
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
