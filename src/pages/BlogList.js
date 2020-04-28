import React from "react";
import BlogSummary from "../components/BlogSummary";
import useCmsQuery from "../hooks/useCmsQuery";
import gql from "graphql-tag";

const BLOG_LIST_CMS_QUERY = gql`
  query getBlogList($locale: String!) {
    allBlog_posts(sortBy: blog_creation_date_DESC, lang: $locale) {
      edges {
        node {
          _meta {
            uid
          }
          blog_title
          blog_creation_date
          blog_header_image
        }
      }
    }
  }
`;

function BlogList() {
  const { loading, data } = useCmsQuery(BLOG_LIST_CMS_QUERY);

  if (loading) {
    return <div>loading...</div>;
  }

  const blogListCmsData = data?.allBlog_posts?.edges;

  return (
    <div className="gusto-blog">
      <h1>Gusto Blog</h1>
      <div className="blog-list">
        {blogListCmsData.map((blog, key) => (
          <BlogSummary blog={blog.node} key={`blog_summary_${key}`} />
        ))}
      </div>
    </div>
  );
}

export default BlogList;
