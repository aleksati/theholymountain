import React from "react";
import Link from "next/link";
import Button from "./Button";

const ToggleRelease = React.forwardRef(({ release, onClick }, ref) => (
  <div className="absolute inset-0 flex items-center justify-center transition duration-200 ease-in-out rounded-md shadow-md opacity-0 group-hover:opacity-100 backdrop-brightness-75">
    <div className="flex space-x-2 text-size-regular">
      <Link href={`/${release.key}`} passHref>
        <Button
          colorStyle={"border-gray-600 hover:border-white text-primary-dark"}
        >
          Details
        </Button>
      </Link>
      <Button
        colorStyle={"border-gray-600 hover:border-white text-primary-dark"}
        onClick={onClick}
        ref={ref}
      >
        Listen
      </Button>
    </div>
  </div>
));

export default ToggleRelease;
