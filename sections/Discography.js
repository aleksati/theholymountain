import LayoutPage from "../components/LayoutPage";
import CardRelease from "../components/CardRelease";

const Discography = ({ releaseData }) => (
  <LayoutPage id="discography">
    <h1 className="mt-4 overflow-hidden text-center text-clip text-size-header-big">
      DISCOGRAPHY
    </h1>
    <div className="grid grid-cols-1 gap-6 p-4 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2">
      {releaseData.map(release => (
        <CardRelease key={release.key} release={release} />
      ))}
    </div>
  </LayoutPage>
);

export default Discography;
