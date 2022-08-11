import SoMeBar from "../SoMeBar";

const ModalListen = ({ url, label }) => {
  return (
    <div
      className="flex flex-col items-center justify-center"
      aria-label={`${label} audio dialog`}
    >
      {url ? (
        <iframe
          className={"p-4"}
          tabIndex="0"
          src={url}
          loading="lazy"
          width="80%"
          height="440"
        ></iframe>
      ) : (
        <>
          <p className="p-4 text-center text-size-regular">
            Sorry, FINITE album preview in unavaliable right now.
          </p>
          <SoMeBar iconSize="text-3xl" className="justify-center p-4" />
        </>
      )}
    </div>
  );
};

export default ModalListen;

// https://bandcamp.com/EmbeddedPlayer/album=2600402427/size=large/bgcol=333333/linkcol=0f91ff/artwork=none/transparent=true/
