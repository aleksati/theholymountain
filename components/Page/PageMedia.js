import PageLayout from "./PageLayout";
import PageMediaGrid from "./PageMediaGrid";
import PageMediaGridItem from "./PageMediaGridItem";
import PageMediaTitle from "./PageMediaTitle";
import MusicToolbar from "../Music/MusicToolbar";

const PageMedia = ({ content, pagetitle, children }) => (
  <PageLayout id={pagetitle} className="pb-4">
    <PageMediaTitle title={pagetitle} />
    <PageMediaGrid>
      {content.map(item => (
        <PageMediaGridItem key={item.key} item={item}>
          {pagetitle === "discography" ? <MusicToolbar item={item} /> : null}
        </PageMediaGridItem>
      ))}
    </PageMediaGrid>
    {children}
  </PageLayout>
);
export default PageMedia;
