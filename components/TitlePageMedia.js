import ButtonIconAndText from "./ButtonIconAndText";

const TitlePageMedia = ({ title, onClick }) => (
  <div className="flex items-center justify-center p-6 space-x-6">
    <ButtonIconAndText
      keepTextOnSmallScreen={true}
      text="Discography"
      className="bg-primary-light"
      iconId="check"
      onClick={() => onClick("music")}
    />
    <ButtonIconAndText
      keepTextOnSmallScreen={true}
      text="Videos"
      onClick={() => onClick("video")}
    />
    <ButtonIconAndText
      keepTextOnSmallScreen={true}
      text="Merch"
      onClick={() => onClick("merch")}
    />
  </div>
);

export default TitlePageMedia;
