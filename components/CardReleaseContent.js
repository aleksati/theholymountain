import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { CgDetailsMore } from "react-icons/cg";
import { SiAudiomack } from "react-icons/si";

const CardReleaseContent = React.forwardRef(({ release, onClick }, ref) => (
  <div className="relative">
    <Image
      className="rounded-md shadow-md"
      src={`/img/${release.key}.png`}
      alt={`${release.title} cover`}
      placeholder="blur"
      width="100%"
      height="100%"
      layout="responsive"
      objectFit="contain"
      blurDataURL={`/img/placeholders/${release.key}.png`}
    />
    <div className="absolute inset-0 flex items-center justify-center transition duration-200 ease-in-out rounded-md shadow-md opacity-0 hover:opacity-100 backdrop-brightness-50">
      <div className="flex space-x-2 text-size-regular">
        <Link href={`/${release.key}`} passHref>
          <Button showTooltip={true} tooltipMessage="Details">
            <CgDetailsMore className="text-md" />
          </Button>
        </Link>
        <Button
          onClick={onClick}
          ref={ref}
          showTooltip={true}
          tooltipMessage="Listen"
        >
          <SiAudiomack className="text-md" />
        </Button>
      </div>
    </div>
  </div>
));

export default CardReleaseContent;
