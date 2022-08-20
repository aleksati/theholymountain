import React from "react";
import SoMeBar from "../SoMeBar";

const ModalShop = ({ label }) => {
  return (
    <div aria-label={`${label} shop dialog`}>
      <p className="p-4 text-center text-size-regular">
        Our shop is coming soon. In the meantime, visit our Bandcamp shop.
      </p>
      <SoMeBar
        className="justify-around p-4"
        iconSize="text-4xl"
        exclude={["spotify", "facebook", "instagram", "soundcloud", "youtube"]}
      />
    </div>
  );
};

export default ModalShop;
