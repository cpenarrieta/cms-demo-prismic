import React from "react";
import BlogSummary from "../components/BlogSummary";
import { useLocale } from "../components/LocaleContext";
import { useQuery } from "@apollo/react-hooks";
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
  const { locale } = useLocale();
  const { loading, data } = useQuery(BLOG_LIST_CMS_QUERY, {
    variables: { locale },
  });

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
