import MyImage from "./MyImage";

const logos = {
  white: { src: "logo uten the white 2MM w grow 32 w sparkle.png", width: "1200", height: "558" },
  dark: { src: "logo-black.png", width: "900", height: "511" },
};

const Logo = ({ variant }) => {
  const { src, width, height } = logos[variant];

  return (
    <MyImage
      src={src}
      width={width}
      height={height}
      layout="responsive"
      alt="band logo"
      priority={true}
    />
  );
};

export default Logo;
