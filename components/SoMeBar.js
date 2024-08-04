// import ButtonIcon from "./ButtonIcon";
import Icon from "./Icon";

const SoMeBar = ({ exclude = [], someObject }) => {
  return (
    <div className={`flex flex-row space-x-4`}>
      {someObject.map((some) => {
        if (exclude.includes(some.key)) return;
        return (
          <a
            role="link"
            key={some.key}
            href={some.url}
            aria-label={some.key}
            className="transition duration-200 ease-in-out text-secondary opacity-40 hover:opacity-80">
            <Icon id={some.key} iconSize="text-3xl" />
          </a>
        );
      })}
    </div>
  );
};

export default SoMeBar;
