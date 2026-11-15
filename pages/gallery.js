import { getGalleryImages } from "../scripts/getGalleryImages.mjs";
import LayoutPage from "../layouts/LayoutPage";
import GalleryGrid from "../components/GalleryGrid.js";

const pageMeta = {
  title: `The Holy Mountain | gallery`,
};

const Gallery = ({ imgNames }) => (
    <LayoutPage pageMeta={pageMeta} containerSize="xl">
       <h1 className="text-size-header md:text-size-header-big leading-none">GALLERY</h1>
      <GalleryGrid imgNames={imgNames}/>
      <p>
        Foto by Katinka Hustad (except 1-4.jpg by Christian Lycke and 1-2.jpg
        and 1-1.jpg by Martin Marki).
      </p>
    </LayoutPage>
  );

export default Gallery;

export const getStaticProps = async () => {
  const imgNames = await getGalleryImages();
  return {
    props: { imgNames },
  };
};
