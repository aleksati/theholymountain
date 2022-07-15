import React from "react";
import Button from "../Button";
import Icon from "../Icon";

const ModalTrigger = React.forwardRef(
  (
    {
      showModal,
      triggerIcon,
      triggerText,
      triggerHasTooltip,
      triggerTooltipMessage,
      triggerLabel,
      tabOrder,
    },
    ref
  ) => {
    return (
      <Button
        ref={ref}
        onClick={showModal}
        showTooltip={triggerHasTooltip ? true : false}
        tooltipMessage={triggerHasTooltip ? triggerTooltipMessage : null}
        aria-label={triggerLabel}
        tabOrder={tabOrder}
      >
        <Icon id={triggerIcon} /> {triggerText ? triggerText : null}
      </Button>
    );
  }
);

export default ModalTrigger;
