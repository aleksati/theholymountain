import LayoutPage from "../components/LayoutPage";
import CardRelease from "../components/CardRelease";

const Discography = ({ releaseData }) => (
  <LayoutPage id="discography">
    <h1 className="m-6 text-center text-size-header">Discography</h1>
    <div className="grid grid-cols-1 grid-rows-2 gap-6 pb-10 lg:grid-cols-3 sm:grid-cols-2">
      {releaseData.map(release => (
        <CardRelease key={release.key} release={release} />
      ))}
    </div>
  </LayoutPage>
);

export default Discography;
