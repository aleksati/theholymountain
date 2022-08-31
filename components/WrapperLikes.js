import Button from "./Button";

const WrapperLikes = ({ children }) => {
  return (
    // <Button>
    <div className="flex items-center space-x-1">{children}</div>
    //</Button>
  );
};

{
  /* <nav className="fixed z-10 flex items-center justify-center space-x-1 scrollLock-compensation left-4 top-4">
{children}
</nav> */
}

export default WrapperLikes;
