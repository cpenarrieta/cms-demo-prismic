import React from "react";
import Text from "../components/Text";
import Quote from "../components/Quote";

const processBodyItem = (bodyItem) => {
  if (bodyItem.type === "text") {
    return <Text>{bodyItem}</Text>;
  } else if (bodyItem.type === "quote") {
    return <Quote>{bodyItem}</Quote>;
  }
};

function BlogBody({ body }) {
  return <>{body.map((bodyItem) => processBodyItem(bodyItem))}</>;
}

export default BlogBody;
