import React from "react";
import { RichText } from "prismic-reactjs";
import { Link } from "react-router-dom";

function BlogSummary({ blog }) {
  return (
    <div className="blog-summary">
      <img src={blog.blog_header_image.url} alt={blog.blog_header_image.alt} />
      <Link to={`/blog/${blog._meta.uid}`}>
        <h4>{RichText.asText(blog.blog_title)}</h4>
      </Link>
      <p>{blog.blog_creation_date}</p>
    </div>
  );
}

export default BlogSummary;
