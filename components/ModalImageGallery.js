import ModalImage from "../components/ModalImage";
import Image from "next/image";

const ModalImageGallery = ({ onModalClose, src, onKeyDown }) => {
  // make so that arrow keydown changes to the next picture.
  return (
    <div onKeyDown={onKeyDown}>
      <ModalImage onModalClose={onModalClose}>
        <div className="relative h-[calc(100dvh-1rem)] w-full">
          <Image
            src={src}
            alt=""
            layout="fill"
            objectFit="contain"
            unoptimized={true} // this is the only way make gifs work with Image component, I found
            quality={100}
          />
        </div>
      </ModalImage>
    </div>
  );
};

export default ModalImageGallery;
