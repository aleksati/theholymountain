import Link from "next/link";
import { NAV_ITEMS } from "../config";
import ButtonIcon from "./ButtonIcon";

const Nav = ({ showNavTop = false, onToggleNavVertical }) => {
  return (
    <div
      className={`fixed inset-0 z-[60] transition-opacity duration-300 ${
        showNavTop ? "visible opacity-100" : "invisible opacity-0 delay-300"
      }`}
      aria-hidden={!showNavTop}>
      <button
        type="button"
        className="absolute inset-0 cursor-default bg-black/50"
        aria-label="Close navigation"
        tabIndex={showNavTop ? 0 : -1}
        onClick={onToggleNavVertical}
      />
      <nav
        id="primary-navigation"
        aria-label="Primary navigation"
        className={`absolute inset-y-0 left-0 w-200 max-w-[85vw] transform bg-primary-dark px-8 pt-28 text-primary-dark shadow-xl transition-transform duration-300 ease-in-out ${
          showNavTop ? "translate-x-0" : "-translate-x-full"
        }`}>
        <ButtonIcon
          iconId="x"
          onClick={onToggleNavVertical}
          iconSize="text-xl md:text-xl"
          aria-label="Close navigation"
          className="absolute left-5 top-5 p-1"
        />
        <div className="flex flex-col items-start space-y-8 md:space-y-8">
          {NAV_ITEMS.map(({ title, href, children }) => (
            <div key={title}>
              {href ? (
                <Link href={href}>
                  <a
                    onClick={onToggleNavVertical}
                    className="font-bold text-primary-dark hover:opacity-70 text-size-header md:text-size-header">
                    {title.toUpperCase()}
                  </a>
                </Link>
              ) : (
                <span className="font-bold text-primary-dark text-size-header md:text-size-header">
                  {title.toUpperCase()}
                </span>
              )}
              {children && (
                <div className="ml-4 mt-2 flex flex-col space-y-4">
                  {children.map((child) => (
                    <Link href={child.href} key={child.href}>
                      <a
                        onClick={onToggleNavVertical}
                        className="font-bold text-primary-dark hover:opacity-70 text-size-title md:text-size-title">
                        {child.title.toUpperCase()}
                      </a>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Nav;
