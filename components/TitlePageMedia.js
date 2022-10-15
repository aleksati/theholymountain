import ButtonIconAndText from "./ButtonIconAndText";

const TitlePageMedia = ({ title }) => (
  //   <div className="flex items-center justify-center p-6 space-x-6">
  //     <ButtonIconAndText
  //       keepTextOnSmallScreen={true}
  //       text="Discography"
  //       className="bg-primary-light"
  //       iconId="check"
  //     />
  //     <ButtonIconAndText keepTextOnSmallScreen={true} text="Videos" />
  //     <ButtonIconAndText keepTextOnSmallScreen={true} text="Merch" />
  //   </div>
  <h1
    aria-label="Media page title"
    className="mt-4 mb-4 overflow-hidden font-bold text-center text-clip text-size-header"
  >
    {title.toUpperCase()}
  </h1>
);

export default TitlePageMedia;
