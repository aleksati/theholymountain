import Image from "next/image";
import loadingGif from "../public/img/loading/loading.gif";

const LoadingGif = () => {
  return (
    <div className="flex place-content-center">
      <Image
        src={loadingGif}
        unoptimized={true} // this is the only way make gifs work with Image component, I found
        alt="loading"
        width="25%"
        height="25%"
      />
    </div>
  );
};

export default LoadingGif;
