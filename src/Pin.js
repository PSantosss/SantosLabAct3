import React from "react";

function Pin(props) {
  return (
    <div
      style={{
        ...styles.Pin,
        ...styles[props.size],
      }}
    >
      <img src={props.imageSrc} alt={props.altText} style={styles.image} />
    </div>
  );
}

const styles = {
  Pin: {
    margin: "15px 10px",
    padding: 0,
    borderRadius: "16px",
    backgroundColor: "transparent", // Set background color to transparent
  },
  small: {
    gridRowEnd: "span 26",
  },
  medium: {
    gridRowEnd: "span 33",
  },
  large: {
    gridRowEnd: "span 45",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: "16px",
  },
};

export default Pin;
