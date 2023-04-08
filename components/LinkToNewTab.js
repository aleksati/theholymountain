import Link from "next/link";

const LinkToNewTab = ({ children, url }) => {
  return (
    <Link href={url}>
      <a target="_blank">{children}</a>
    </Link>
  );
};

export default LinkToNewTab;
