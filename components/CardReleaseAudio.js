import SoMeBar from "./SoMeBar";

const CardReleaseAudio = ({ className, url }) => {
  return (
    <>
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
        iconSize="text-xl"
        exclude={["spotify"]}
        className="justify-around p-4"
      />
    </>
  );
};

export default CardReleaseAudio;

// https://bandcamp.com/EmbeddedPlayer/album=2600402427/size=large/bgcol=333333/linkcol=0f91ff/artwork=none/transparent=true/
