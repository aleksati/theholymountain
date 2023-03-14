import loadingGif from "../public/img/loading.gif";
import Image from "next/image";

const Spinner = () => (
  <div className="flex place-content-center">
    {/* <Image
      src={loadingGif}
      unoptimized={true} // this is the only way make gifs work with Image component, I found
      alt="loading"
      width="30%"
      height="30%"
    /> */}
    <p className="text-size-small">loading...</p>
  </div>
);

export default Spinner;
