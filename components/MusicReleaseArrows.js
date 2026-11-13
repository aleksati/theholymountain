import { useRouter } from "next/router";
import { NAV_ITEMS } from "../config";
import Button from "./Button";
import Icon from "./Icon";

const musicPages =
  NAV_ITEMS.find(({ children }) => children?.some(({ href }) => href.startsWith("/music/")))?.children || [];

const MusicReleaseArrows = () => {
  const router = useRouter();
  const currentIndex = musicPages.findIndex(({ href }) => href === router.pathname);

  if (currentIndex === -1 || musicPages.length < 2) return null;

  const previousRelease = musicPages[(currentIndex - 1 + musicPages.length) % musicPages.length];
  const nextRelease = musicPages[(currentIndex + 1) % musicPages.length];

  return (
    <>
      <Button
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 md:left-0"
        tooltipMessage="Previous release"
        onClick={() => router.push(previousRelease.href)}>
        <Icon id="prevArrow" iconSize="text-lg" />
      </Button>
      <Button
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 md:right-0"
        tooltipMessage="Next release"
        onClick={() => router.push(nextRelease.href)}>
        <Icon id="nextArrow" iconSize="text-lg" />
      </Button>
    </>
  );
};

export default MusicReleaseArrows;
