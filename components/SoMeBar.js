import { FaBandcamp } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { BsSpotify } from "react-icons/bs";

const SoMeBar = ({ iconSize, exclude = [], className }) => {
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
    {
      key: "spotify",
      url: "https://open.spotify.com/artist/04GXo6z6x1KLMG9weDPayK?si=rzFLNrlkTvml0zaKqo_tuQ",
      html: <BsSpotify className={`${iconSize}`} />,
    },
  ];

  return (
    <div className={`flex flex-row ${className}`}>
      {some.map(some => {
        if (exclude.includes(some.key)) return;
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
