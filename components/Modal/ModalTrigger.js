import React from "react";
import Button from "../Button";
import Icon from "../Icon";

const ModalTrigger = React.forwardRef((props, ref) => {
  const {
    showModal,
    triggerIcon,
    triggerText,
    triggerHasTooltip,
    triggerTooltipMessage,
    triggerLabel,
    tabOrder,
  } = props;

  return (
    <Button
      ref={ref}
      onClick={showModal}
      showTooltip={triggerHasTooltip ? true : false}
      tooltipMessage={triggerHasTooltip ? triggerTooltipMessage : null}
      aria-label={triggerLabel}
      tabOrder={tabOrder}
    >
      <Icon id={triggerIcon} />
      {triggerText ? <p>&nbsp;{triggerText}</p> : null}
    </Button>
  );
});

ModalTrigger.displayName = "ModalTrigger";

export default ModalTrigger;
