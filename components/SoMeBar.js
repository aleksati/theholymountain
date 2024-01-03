import ButtonIcon from "./ButtonIcon";
// import Icon from "./Icon";

const SoMeBar = ({ exclude = [], someObject }) => {
  return (
    <div className={`flex flex-row space-x-4`}>
      {someObject.map((some) => {
        if (exclude.includes(some.key)) return;
        return (
          <ButtonIcon
            key={some.key}
            href={some.url}
            iconId={some.key}
            className="transition duration-200 ease-in-out text-secondary opacity-40 hover:opacity-80"
          />
          // <a
          //   key={some.key}
          //   href={some.url}
          //   role="link"
          //   aria-label={some.key}
          //   className="transition duration-200 ease-in-out text-secondary opacity-40 hover:opacity-80">
          //   <Icon id={some.key} />
          // </a>
        );
      })}
    </div>
  );
};

export default SoMeBar;
