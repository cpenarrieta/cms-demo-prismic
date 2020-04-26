import React from "react";
import { RichText } from "prismic-reactjs";

function Quote({ children }) {
  return (
    <div className="blog-quote">
      <blockquote>{RichText.asText(children.primary.quote)}</blockquote>
      <div className="author">
        <p>{RichText.asText(children.primary.name_of_the_author)}</p>
        <img
          src={children.primary.portrait_author.url}
          alt={children.primary.portrait_author.alt}
        />
      </div>
    </div>
  );
}

export default Quote;
