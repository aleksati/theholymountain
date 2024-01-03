import { getGalleryImages } from "../scripts/getGalleryImages.mjs";
import ModalImageGallery from "../components/ModalImageGallery.js";
import MyImageGallery from "../components/MyImageGallery.js";
import LayoutPage from "../layouts/LayoutPage";
import Grid from "../components/Grid";
import { useCallback, useState } from "react";

const pageMeta = {
  title: `The Holy Mountain | gallery`,
};

const gallery = ({ imgNames }) => {
  const [modalIsShown, setModalIsShown] = useState(false);
  const [selectedImg, setSelectedImg] = useState();

  const handleImgClick = (e) => {
    setSelectedImg(e.target.src);
    setModalIsShown(true);
  };

  const handleModalClose = () => setModalIsShown(false);

  // flip through images using arrow keys.
  const handleKeyDown = useCallback(
    (e) => {
      // if its now an arrowkey, we exit.
      const key = e.keyCode;
      if (key !== 37 && key !== 39) return;

      // get only the img name
      const parts = selectedImg.split("/");
      const imgName = parts[parts.length - 1];

      // get the array index of the imgName in the imgNames array
      const currIdx = imgNames.findIndex((item) => item === imgName);

      // if user hits arrow left, deincrement and loop back to the end when below 0.
      let newIdx;
      if (key === 37) {
        newIdx = currIdx - 1 < 0 ? imgNames.length - 1 : currIdx - 1;
      }

      //if user hits right arrow, increment to next img and loop to 0 when at the end.
      if (key === 39) {
        newIdx = currIdx + 1 > imgNames.length - 1 ? 0 : currIdx + 1;
      }

      // set new imgae as selected image
      setSelectedImg(`/img/gallery/${imgNames[newIdx]}`);
    },
    [imgNames, selectedImg]
  );

  // I dont use Placeholder "blur" because the images are very small by themselves

  return (
    <LayoutPage pageMeta={pageMeta}>
      <Grid gridCols={3}>
        {imgNames.map((img) => (
          <MyImageGallery
            key={img}
            src={img}
            layout="responsive"
            objectFit="contain"
            onImgClick={handleImgClick}
          />
        ))}
        {modalIsShown && (
          <ModalImageGallery
            src={selectedImg}
            onKeyDown={handleKeyDown}
            onModalClose={handleModalClose}
          />
        )}
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
