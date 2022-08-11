import PageLayout from "../components/Page/PageLayout";
import PageGrid from "../components/Page/PageGrid";
import MusicItem from "../components/Music/MusicItem";
import PageTitle from "../components/Page/PageTitle";

const Discography = ({ musicData, children, maxGridCols }) => (
  <PageLayout id="discography" className="pb-4">
    <PageTitle title="Discography" />
    <PageGrid maxGridCols={maxGridCols}>
      {musicData.map(item => (
        <MusicItem key={item.key} item={item} />
      ))}
    </PageGrid>
    {children}
  </PageLayout>
);

export default Discography;
