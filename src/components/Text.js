import React from "react";
import { RichText } from "prismic-reactjs";

function Text({ children }) {
  return <div>{RichText.render(children.primary.text)}</div>;
}

export default Text;
