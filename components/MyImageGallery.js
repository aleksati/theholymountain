import Image from "next/image";

const MyImageGallery = ({ src, layout, objectFit, onImgClick }) => (
  <div className="w-full p-1 flex flex-col justify-center">
    <div className="relative">
      <Image
        src={`/img/gallery/${src}`}
        width={"0"}
        height={"0"}
        layout={layout}
        objectFit={objectFit}
        className={`w-full h-auto m-0 hover:cursor-pointer`}
        unoptimized={true} // this is the only way make gifs work with Image component, I found
        onClick={onImgClick}
      />
    </div>
  </div>
);

MyImageGallery.displayName = "MyImageGallery";

export default MyImageGallery;
