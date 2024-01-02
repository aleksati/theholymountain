import ButtonIcon from "./ButtonIcon";
import React from "react";

const ModalTrigger = React.forwardRef(({ modalProps, onModalTrigger }, ref) => {
  return <ButtonIcon ref={ref} {...modalProps} onClick={onModalTrigger} />;
});

export default ModalTrigger;
