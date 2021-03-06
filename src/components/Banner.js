import React from "react";

function Banner({ title, content, type }) {
  return (
    <div className={`banner banner-${type.toLowerCase()}`}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default Banner;
