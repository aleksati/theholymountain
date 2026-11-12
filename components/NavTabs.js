import Link from "next/link";

const NAV_ITEMS = [
  { title: "About", href: "/about", route: "about" },
  {
    title: "Discography",
    href: "/music",
    route: "music",
    children: [{ title: "They Are Asleep", href: "/music/theyareasleep" }],
  },
  { title: "Shop", href: "/shop", route: "shop" },
  { title: "Contact", href: "/contact", route: "contact" },
];

const NavTabs = ({ onNavigate }) => {
  return (
    <div className="flex flex-col items-start space-y-6">
      {NAV_ITEMS.map(({ title, href, route, children }) => {
        return (
          <div key={route}>
            <Link href={href}>
              <a
                onClick={onNavigate}
                className="font-bold text-primary-dark hover:opacity-70 text-size-title md:text-size-header">
                {title.toUpperCase()}
              </a>
            </Link>
            {children && (
              <div className="ml-4 mt-2 flex flex-col space-y-2">
                {children.map((child) => (
                  <Link href={child.href} key={child.href}>
                    <a
                      onClick={onNavigate}
                      className="font-bold text-primary-dark hover:opacity-70 text-size-regular md:text-size-title">
                      {child.title.toUpperCase()}
                    </a>
                  </Link>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default NavTabs;
