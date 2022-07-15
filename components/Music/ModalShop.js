import React from "react";
import SoMeBar from "../SoMeBar";

const ModalShop = ({ label }) => {
  return (
    <div aria-label={`${label} shop dialog`}>
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

export default ModalShop;
