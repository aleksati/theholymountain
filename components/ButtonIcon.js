import React from "react";
// import Button from "./Button";
import Icon from "./Icon";

const ButtonIcon = React.forwardRef((props, ref) => {
  const { onClick, iconId, iconSize, ...aProps } = props;
  return (
    <div
      ref={ref}
      tabIndex="-1"
      className="hover:cursor-pointer px-2 z-20"
      onClick={onClick}>
      <a {...aProps}>
        <Icon id={iconId} iconSize={iconSize} />
      </a>
    </div>
  );
});

ButtonIcon.displayName = "ButtonIcon";

export default ButtonIcon;

// import React from "react";
// import Button from "./Button";
// import Icon from "./Icon";

// const ButtonIconAndText = React.forwardRef(
//   (
//     {
//       onClick,
//       pressed,
//       iconId,
//       text,
//       hasTooltip,
//       tooltipText,
//       label,
//       tabOrder,
//       iconSize,
//       className,
//       onKeyDown,
//     },
//     ref
//   ) => {
//     return (
//       <Button
//         ref={ref}
//         onClick={onClick}
//         showTooltip={hasTooltip ? true : false}
//         tooltipMessage={hasTooltip ? tooltipText : null}
//         aria-label={label}
//         aria-pressed={pressed}
//         tabOrder={tabOrder}
//         className={className}
//         onKeyDown={onKeyDown}>
//         <Icon id={iconId} iconSize={iconSize} />
//         {text ? <>&nbsp;{text}</> : null}
//       </Button>
//     );
//   }
// );

// // iconSize ? iconSize : null

// ButtonIconAndText.displayName = "ButtonWithIconAndText";

// export default ButtonIconAndText;
