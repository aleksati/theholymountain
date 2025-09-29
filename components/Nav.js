import { useClickOutside } from "../hooks/useClickOutside";
import getCurrTheme from "../functions/getCurrTheme";
import NavTabs from "./NavTabs";
// import ButtonTheme from "./ButtonTheme";
import { useEffect } from "react";
import Link from "next/link";
// import Contact from "./Contact";
import MyImage from "./MyImage";
import SoMeBar from "./SoMeBar";

const someObject = [
  {
    key: "spotify",
    url: "https://open.spotify.com/artist/04GXo6z6x1KLMG9weDPayK?si=rzFLNrlkTvml0zaKqo_tuQ",
  },
  {
    key: "applemusic",
    url: "https://music.apple.com/us/artist/the-holy-mountain/1685003735",
  },
  {
    key: "tidal",
    url: "https://tidal.com/browse/artist/39079821",
  },
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
    url: "https://www.youtube.com/@theholymountaintrio",
  },
];

const Nav = ({ showNavTop, onToggleNavVertical }) => {
  const [ref, isClickOutside] = useClickOutside();
  const { currTheme } = getCurrTheme();

  useEffect(() => {
    if (isClickOutside && showNavTop) onToggleNavVertical();
  }, [isClickOutside, onToggleNavVertical, showNavTop]);

  return (
    <div
      className={`z-40 min-h-screen border-r border-secondary bg-primary-light dark:bg-primary-dark dark:border-secondary-dark space-y-12 ${
        showNavTop ? "fixed" : "flex-none"
      } w-full p-4`}
      ref={ref}>
      {/* <div className="fixed w-52 mt-2 md:mt-4"> */}
      <div className="flex flex-col space-y-6 items-center justify-center">
        <Link href="/">
          <div className="px-6 w-80 hover:cursor-pointer pt-2">
            <MyImage
              src={currTheme === "dark" ? "logo-white.png" : "logo-black.png"}
              width="900"
              height="511"
              layout="responsive"
              alt="band logo"
              priority={true}
            />
          </div>
        </Link>
        <div className="pl-6">
          <NavTabs />
        </div>
        <SoMeBar someObject={someObject} />
      </div>
    </div>
  );
};

export default Nav;
