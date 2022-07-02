const Footer = () => {
  return (
    <footer className="py-6 text-sm text-center bg-secondary-light">
      <span className="mr-2 font-bold text-primary-light">
        The Holy Mountain
      </span>
      &copy; {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
