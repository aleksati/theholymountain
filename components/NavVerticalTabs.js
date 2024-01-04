import { useRouter } from "next/router";
import Link from "next/link";

const NAV_TABS = ["about", "music", "videos", "shop", "gallery", "contact"];

const NavVerticalTabs = () => {
  // get the current route after /pages and remove the first "/" with slice
  const route = useRouter().pathname.slice(1);
  // remove /[post] stuff on nested rutes, and remaining "/" at the end
  let firstRoute = route.split("[")[0].split("/")[0];

  // default to about
  const currRoute = firstRoute.length ? firstRoute : "about";

  return (
    <div className="space-y-4">
      {/* https://stackoverflow.com/questions/34913675/how-to-iterate-keys-values-in-javascript */}
      {NAV_TABS.map((tab) => {
        const underline = currRoute === tab;
        return (
          <div
            key={tab}
            className="flex space-y-2 space-x-1 items-center justify-start">
            {/* få inn noe bedre her. Var MyLink */}
            <Link href={`/${tab}`}>
              <p
                className={`hover:cursor-pointer border-primary-light dark:border-primary-dark ${
                  underline ? "border-b-2" : ""
                }`}>
                {tab}
              </p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default NavVerticalTabs;
