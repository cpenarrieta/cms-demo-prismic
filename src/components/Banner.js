import React from "react";

function Banner({ title, content }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default Banner;
