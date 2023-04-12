import ButtonIconAndText from "./ButtonIconAndText";
import LinkToNewTab from "./LinkToNewTab";

const EthButton = ({ url }) => {
  // links to the url in a new browser tab
  return (
    <LinkToNewTab url={url}>
      <ButtonIconAndText
        iconId="eth"
        hasTooltip
        tooltipText="NFT market"
        label="NFT Marketplace button"
      />
    </LinkToNewTab>
  );
};

export default EthButton;
