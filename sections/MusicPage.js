import LayoutPage from "../components/LayoutPage";
import MusicGrid from "../components/Music/MusicGrid";
import PageTitle from "../components/PageTitle";

const MusicPage = ({ musicData }) => (
  <LayoutPage id="discography" className="pb-4">
    <PageTitle title="discography" />
    <MusicGrid musicData={musicData} />
  </LayoutPage>
);

export default MusicPage;
