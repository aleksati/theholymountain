const Footer = () => {
  return (
    <footer className="py-6 text-sm text-center bg-ternary-light dark:bg-ternary-dark">
      <span className="mr-2 text-secondary-light dark:text-secondary-dark">
        The Holy Mountain
      </span>
      &copy; {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
