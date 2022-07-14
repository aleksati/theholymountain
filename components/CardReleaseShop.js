import React from "react";
import SoMeBar from "./SoMeBar";

const CardReleaseShop = () => {
  return (
    <div>
      <p className="p-4 text-center text-size-regular">
        Coming soon! In the mean time:
      </p>
      <SoMeBar
        className="justify-around p-4"
        iconSize="text-3xl"
        exclude={["spotify", "facebook", "instagram", "soundcloud", "youtube"]}
      />
    </div>
  );
};

export default CardReleaseShop;
