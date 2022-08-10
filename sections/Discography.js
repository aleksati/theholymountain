import PageLayout from "../components/Page/PageLayout";
import PageGrid from "../components/Page/PageGrid";
import AlbumModalWrapper from "../components/Music/AlbumModalWrapper";
import PageTitle from "../components/Page/PageTitle";

const Discography = ({ musicData, children, maxGridCols }) => (
  <PageLayout id={"Discography"} className="pb-4">
    <PageTitle title="Music" />
    <PageGrid maxGridCols={maxGridCols}>
      {musicData.map(album => (
        <AlbumModalWrapper key={album.key} album={album} />
      ))}
    </PageGrid>
    {children}
  </PageLayout>
);

export default Discography;
