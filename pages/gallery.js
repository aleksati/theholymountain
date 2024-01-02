import { getGalleryImages } from "../scripts/getGalleryImages.mjs";
import LayoutPage from "../layouts/LayoutPage";
import Grid from "../components/Grid";
import MyImage from "../components/MyImage";

const pageMeta = {
  title: `The Holy Mountain | gallery`,
};

const gallery = ({ imgNames }) => {
  return (
    <LayoutPage pageMeta={pageMeta}>
      <Grid gridCols={3}>
        {imgNames.map((img) => (
          <div className="p-1" key={img}>
            <MyImage
              src={`gallery/${img}`}
              layout="responsive"
              objectFit="contain"
              isExpandable={true}
            />
          </div>
        ))}
      </Grid>
      <p className="text-sm text-secondary">
        Images by Katinka Hustad, Christian Lycke and Martin Marki
      </p>
    </LayoutPage>
  );
};

export default gallery;

export const getStaticProps = async () => {
  const imgNames = await getGalleryImages();
  return {
    props: { imgNames },
  };
};
