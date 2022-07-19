import PageLayout from "./PageLayout";
import PageMediaGrid from "./PageMediaGrid";
import PageMediaGridItem from "./PageMediaGridItem";
import PageMediaTitle from "./PageMediaTitle";
import MusicToolbar from "../Music/MusicToolbar";

const PageMedia = ({ content, pageTitle, children, maxGridCols }) => (
  <PageLayout id={pageTitle} className="pb-4">
    <PageMediaTitle title={pageTitle} />
    <PageMediaGrid maxGridCols={maxGridCols}>
      {content.map(item => (
        <PageMediaGridItem key={item.key} item={item}>
          {pageTitle === "discography" ? <MusicToolbar item={item} /> : null}
        </PageMediaGridItem>
      ))}
    </PageMediaGrid>
    {children}
  </PageLayout>
);
export default PageMedia;
