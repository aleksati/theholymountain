import SoMeBar from './SoMeBar';

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

export default function Footer() {
  return (
    <footer className="flex flex-col items-center bg-primary-dark gap-2 border-t border-secondary-skin-dark pt-4 pb-4 text-secondary">
      <SoMeBar someObject={someObject} iconSize="text-xl" />
      <p className="text-size-small">© Underworld Productions</p>
    </footer>
  );
}
