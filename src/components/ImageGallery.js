import React from "react";
import { RichText } from "prismic-reactjs";

function ImageGallery({ title, children }) {
  return (
    <div className="image-gallery">
      <h3>{RichText.asText(title)}</h3>
      <div className="image-gallery-grid">
        {children.map((image, key) => (
          <div key={key} className="image-gallery-grid-item">
            <img src={image.gallery_image.url} alt={image.gallery_image.alt} />
            <p>{RichText.asText(image.image_captions)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
