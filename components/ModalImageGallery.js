import ModalImage from "../components/ModalImage";
import Image from "next/image";

const ModalImageGallery = ({ onModalClose, src, onKeyDown }) => {
  // make so that arrow keydown changes to the next picture.
  return (
    <div onKeyDown={onKeyDown}>
      <ModalImage onModalClose={onModalClose}>
        <Image
          src={src}
          width={"0"}
          height={"0"}
          layout="responsive"
          objectFit="contain"
          className={`w-full h-auto m-0`}
          unoptimized={true} // this is the only way make gifs work with Image component, I found
          quality={100}
        />
      </ModalImage>
    </div>
  );
};

export default ModalImageGallery;
