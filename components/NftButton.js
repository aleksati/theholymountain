import ButtonIconAndText from "./ButtonIconAndText";
import LinkToNewTab from "./LinkToNewTab";

const NftButton = ({ url }) => {
  // links to the url in a new browser tab
  return (
    <LinkToNewTab url={url}>
      <ButtonIconAndText
        iconId="eth"
        hasTooltip
        tooltipText="NFT"
        label="NFT Marketplace button"
      />
    </LinkToNewTab>
  );
};

export default NftButton;
