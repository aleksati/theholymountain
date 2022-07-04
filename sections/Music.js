import LayoutPage from "../components/LayoutPage";
import ReleaseCard from "../components/Music/ReleaseCard";

const Music = ({ musicData }) => {
  return (
    <LayoutPage>
      <h1 className="m-6 text-center text-size-header">Discography</h1>
      <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-3 md:grid-cols-2">
        {musicData.map(release => (
          <ReleaseCard key={release.key} release={release} />
        ))}
      </div>
    </LayoutPage>
  );
};

export default Music;
