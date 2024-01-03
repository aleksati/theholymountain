// import ButtonIcon from "./ButtonIcon";
import ModalImage from "./ModalImage";
import { useState } from "react";
import Image from "next/image";
import React from "react";

const MyImage = React.forwardRef((props, ref) => {
  const { caption, width, height, isExpandable, src, ...imgProps } = props;
  const [modalIsShown, setModalIsShown] = useState(false);
  const handleImgClick = () => setModalIsShown(true);
  const handleModalClose = () => setModalIsShown(false);

  const img = `/img/${src}`;
  // const placholder = `/img/placeholders/${src}`;
  // removing placeholder blur because the images are so small.

  return (
    <>
      <div className="w-full flex flex-col justify-center">
        <div className="relative">
          <Image
            {...imgProps}
            ref={ref}
            src={img}
            // placeholder="blur"
            // blurDataURL={placholder}
            width={width ? width + "" : "0"}
            height={height ? height : "0"}
            className={`${width ? "" : "w-full"} h-auto m-0 ${
              isExpandable ? "hover:cursor-pointer" : null
            }`}
            unoptimized={true} // this is the only way make gifs work with Image component, I found
            onClick={handleImgClick}
          />
          {/* {isExpandable ? (
            <div className="absolute rounded-sm top-0 bg-primary-light dark:bg-primary-dark bg-opacity-50 right-0">
              <ButtonIcon iconId="expand" iconSize="text-sm" />
            </div>
          ) : null} */}
        </div>
        {caption ? (
          <figcaption className="text-sm text-secondary dark:text-secondary-dark">
            {caption}
          </figcaption>
        ) : null}
      </div>
      {modalIsShown && isExpandable && (
        <ModalImage onModalClose={handleModalClose}>
          <Image
            {...imgProps}
            src={img}
            // placeholder="blur"
            // blurDataURL={placholder}
            width={width ? width + "" : "0"}
            height={height ? height : "0"}
            className={`${width ? "" : "w-full"} h-auto m-0`}
            unoptimized={true} // this is the only way make gifs work with Image component, I found
            quality={100}
          />
        </ModalImage>
      )}
    </>
  );
});

MyImage.displayName = "MyImage";

export default MyImage;
