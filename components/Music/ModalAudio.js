import SoMeBar from "../SoMeBar";

const ModalAudio = ({ url, label }) => {
  return (
    <div aria-label={`${label} audio dialog`}>
      {url ? (
        <iframe
          className={"p-4"}
          src={url}
          loading="lazy"
          width="100%"
          height="440"
        ></iframe>
      ) : (
        <p className="p-4 text-center text-size-regular">
          Sorry, no spotify audio preview avaliable{" "}
        </p>
      )}
      <SoMeBar
        iconSize="text-3xl"
        exclude={["instagram", "facebook", "youtube"]}
        className="justify-around p-4"
      />
    </div>
  );
};

export default ModalAudio;

// https://bandcamp.com/EmbeddedPlayer/album=2600402427/size=large/bgcol=333333/linkcol=0f91ff/artwork=none/transparent=true/
