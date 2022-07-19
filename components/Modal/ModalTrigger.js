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
      btnSize,
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
        className={btnSize ? btnSize : null}
      >
        <Icon id={triggerIcon} />
        {triggerText ? <p>&nbsp;{triggerText}</p> : null}
      </Button>
    );
  }
);

ModalTrigger.displayName = "ModalTrigger";

export default ModalTrigger;
