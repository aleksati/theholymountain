import Link from "next/link";
import LayoutPage from "../components/LayoutPage";
import ReleaseCard from "../components/music/ReleaseCard";

const Music = ({ musicData }) => {
  return (
    <LayoutPage>
      <div className="flex flex-wrap">
        {musicData.map(release => (
          <ReleaseCard key={release.key} release={release} />
        ))}
      </div>
    </LayoutPage>
  );
};

export default Music;
