import Image from "next/image";
import cat1 from "../public/img/cat3.gif";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen space-y-8 lg-flex-row">
      <h1 className="text-4xl text-white">Under utvilking ..</h1>
      <div className="relative w-32 h-32 overflow-hidden rounded-full ring-2 ring-pink-300 ring-offset-0">
        <Image
          objectFit="cover"
          src={cat1}
          alt="Picture of Cat1"
          layout="fill"
          priority
        />
      </div>
    </div>
  );
}
