import Image from "next/image";
import errorGif from "../public/img/loading.gif";

const Error = () => (
  <div className="flex place-content-center">
    {/* <Image
      src={errorGif}
      unoptimized={true} // this is the only way make gifs work with Image component, I found
      alt="loading"
      width="25%"
      height="25%"
    /> */}
    <p className="text-size-small">error occured...</p>
  </div>
);

export default Error;
