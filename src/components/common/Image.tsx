"use client";

import { useEffect, useState } from "react";

const Image = ({
  width,
  height,
  src,
  className,
  placeHolderHeight = "50%",
  rounded = false,
}) => {
  const [loaded, setLoaded] = useState(false);
  const [image, setImage] = useState(false);

  useEffect(() => {
    fetch(src)
      .then((response) => response.json())
      .then((data) => setImage(data.image_url));
    setLoaded(true);
  }, [src]);

  const placeholderStyle = {
    width: width ? `${width}px` : "100%",
    height: height ? `${height}px` : loaded ? "auto" : placeHolderHeight,
    backgroundColor: "#f0f0f0", // Placeholder background color
    borderRadius: rounded ? "50%" : "4px", // You can adjust the border radius as needed
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    position: "relative",
  };

  const spinnerStyle = {
    position: "absolute",
    width: "40px",
    height: "40px",
    border: "4px solid #ccc", // Color of the spinner
    borderTopColor: "#333", // Color of the spinner
    borderRadius: "50%",
    animation: "spin 1s linear infinite", // Spin animation
  };

  return (
    <div style={placeholderStyle}>
      {!loaded && <div style={spinnerStyle}></div>}
      <img
        src={src}
        alt="Placeholder"
        className={className}
        style={{
          display: loaded ? "block" : "none",
          maxWidth: "100%",
          maxHeight: "100%",
          borderRadius: rounded ? "50%" : "4px",
        }}
      />
    </div>
  );
};

export default Image;
