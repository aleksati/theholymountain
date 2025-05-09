import { useRouter } from "next/router";
import ButtonIcon from "./ButtonIcon";
// import MyImage from "./MyImage";
// import Link from "next/link";

const NavTop = ({ onToggleNavVertical, showNavVertical }) => {
  // get the current route after /pages and remove the first "/" with slice
  // const route = useRouter().pathname.slice(1);
  // // remove /[post] stuff on nested rutes, and remaining "/" at the end
  // let firstRoute = route.split("[")[0].split("/")[0];
  // // default to about
  // const currRoute = firstRoute.length ? firstRoute : "";

  return (
    <nav
      className="z-50 fixed w-full bg-primary-dark text-lg"
      aria-label="Navbar"
      role="toolbar">
      {/* <div className="flex p-4 items-center space-x-1">
        <Link href={`/${currRoute}`} className="hover:cursor-pointer">
          {currRoute ? (
            <p>{currRoute}</p>
          ) : (
            <div className="-mb-4">
              <MyImage
                src="logo-white.png"
                width="48"
                height="40"
                // layout="responsive"
                alt="band logo"
                priority={true}
              />
            </div>
          )}
        </Link>
      </div> */}
      {/* fixed class, because it messes with the transition from navtop to nav vertical (just a tiny bit) */}
      <div className="fixed top-4 right-4">
        <ButtonIcon
          iconId={showNavVertical ? "x" : "threedots"}
          onClick={onToggleNavVertical}
          iconSize="text-3xl md:text-4xl"
        />
      </div>
    </nav>
  );
};

export default NavTop;
