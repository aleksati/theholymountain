import React, { useEffect } from "react";

// handle if the click happens on the button
const AboutCard = React.forwardRef(({ handleClickOutside, navRef }, ref) => {
  // handle click outside of the card
  useEffect(() => {
    const onClickOutside = event => {
      if (navRef.current && navRef.current.contains(event.target)) return;
      if (ref.current && !ref.current.contains(event.target)) {
        handleClickOutside();
      }
    };

    document.addEventListener("click", onClickOutside, true);
    return () => {
      document.removeEventListener("click", onClickOutside, true);
    };
  }, [navRef, ref]);

  return (
    <div className="fixed inset-0 flex items-center justify-center w-full h-screen backdrop-blur-sm">
      <div
        ref={ref}
        className="max-w-sm p-6 rounded-sm shadow-md bg-ternary-light dark:bg-ternary-dark"
      >
        <h1 className="mb-2 text-primary-light dark:text-primary-dark text-size-title">
          The Holy Mountain
        </h1>
        <p className="mb-3 text-secondary-light dark:text-secondary-dark text-size-regular">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order. Here is our band description.
        </p>
      </div>
    </div>
  );
});

export default AboutCard;
