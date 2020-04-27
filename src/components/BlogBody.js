import React from "react";
import Text from "../components/Text";
import Quote from "../components/Quote";
import ImageGallery from "../components/ImageGallery";

const processBodyItem = (bodyItem, key) => {
  if (bodyItem.type === "text") {
    return <Text key={`text-${key}`}>{bodyItem}</Text>;
  } else if (bodyItem.type === "quote") {
    return <Quote key={`quote-${key}`}>{bodyItem}</Quote>;
  } else if (bodyItem.type === "image_gallery") {
    return (
      <ImageGallery
        key={`image_gallery-${key}`}
        title={bodyItem.primary.name_of_the_gallery}
      >
        {bodyItem.fields}
      </ImageGallery>
    );
  }
};

function BlogBody({ body }) {
  return <>{body.map((bodyItem, key) => processBodyItem(bodyItem, key))}</>;
}

export default BlogBody;
