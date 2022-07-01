import React, { useEffect, useState } from "react";

const ProgressiveImage = ({ placeholder, src, alt, width }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentImg, setCurrImage] = useState(placeholder);

  // on mount
  // start loading original image
  // When image is loaded replace the image's src and set loading to false
  useEffect(() => {
    const imageToLoad = new Image(); // this needs to be done in the browser clientside
    imageToLoad.src = src;
    imageToLoad.onload = () => {
      setCurrImage(src);
      setIsLoading(false);
    };
  }, []);

  return (
    <Img
      src={currentImg}
      className="ProgressiveImage"
      style={{
        opacity: isLoading ? 0.5 : 1,
        transition: "opacity .15s linear",
      }}
      alt={alt}
      width={width}
    />
  );
};

ProgressiveImage.defaultProps = {
  alt: "",
  width: "100%",
};

export default ProgressiveImage;

// class ProgressiveImage extends Component {
//   static defaultProps = {
//     alt: "",
//     width: "100%",
//   };

//   constructor(props) {
//     super(props);
//     // initially set loading to true and current src of image to placeholder image
//     this.state = {
//       loading: true,
//       currentSrc: props.placeholder,
//     };
//   }

//   componentDidMount() {
//     const { src } = this.props;
//     // start loading original image
//     const imageToLoad = new Image();
//     imageToLoad.src = src;
//     imageToLoad.onload = () =>
//       // When image is loaded replace the image's src and set loading to false
//       this.setState({ currentSrc: src, loading: false });
//   }

//   render() {
//     const { currentSrc, loading } = this.state;
//     const { alt, width } = this.props;
//     return (
//       <img
//         src={currentSrc}
//         className="ProgressiveImage"
//         style={{
//           opacity: loading ? 0.5 : 1,
//           transition: "opacity .15s linear",
//         }}
//         alt={alt}
//         width={width}
//       />
//     );
//   }
// }

// ProgressiveImage.propTypes = {
//   src: PropTypes.string.isRequired,
//   placeholder: PropTypes.string.isRequired,
//   alt: PropTypes.string.isRequired,
// };

// export default ProgressiveImage;
