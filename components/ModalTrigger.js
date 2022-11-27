import ButtonIconAndText from "./ButtonIconAndText";
import React from "react";

const ModalTrigger = React.forwardRef(({ modalProps, onModalTrigger }, ref) => {
  return (
    <ButtonIconAndText ref={ref} {...modalProps} onClick={onModalTrigger} />
  );
});

export default ModalTrigger;
