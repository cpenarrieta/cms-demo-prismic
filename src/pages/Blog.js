import React from "react";
import { useParams } from "react-router-dom";
import useCmsQuery from "../hooks/useCmsQuery";
import { RichText } from "prismic-reactjs";
import gql from "graphql-tag";
import BlogBody from "../components/BlogBody";

const BLOG_ITEM_CMS_QUERY = gql`
  query getBlogItem($uid: String) {
    allBlog_posts(uid: $uid) {
      edges {
        node {
          _meta {
            uid
          }
          blog_title
          blog_creation_date
          blog_header_image
          body {
            ... on Blog_postBodyText {
              type
              label
              primary {
                text
              }
            }
            ... on Blog_postBodyQuote {
              type
              label
              primary {
                quote
                name_of_the_author
                portrait_author
              }
            }
            ... on Blog_postBodyImage_gallery {
              type
              label
              primary {
                name_of_the_gallery
              }
              fields {
                image_captions
                gallery_image
              }
            }
            ... on Blog_postBodyBanner_with_caption {
              type
              label
              primary {
                image_banner
                title_of_banner
                description
                button_label
                button_link {
                  ... on _ExternalLink {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

function Blog() {
  let { blogUid } = useParams();
  const { loading, data } = useCmsQuery(
    BLOG_ITEM_CMS_QUERY,
    { uid: blogUid },
    { fetchPolicy: "no-cache" } // hack to allow the use of Fragments here, real solution is unnecesary for this demo.
  );

  if (loading) {
    return <div>loading...</div>;
  }

  const blogCmsData = data?.allBlog_posts?.edges[0]?.node;

  return (
    <div className="blog-item">
      <div className="blog-item-header">
        <div className="blog-item-header-title">
          <h3>{RichText.asText(blogCmsData.blog_title)}</h3>
          <p>{blogCmsData.blog_creation_date}</p>
        </div>
        <div className="blog-item-header-image">
          <img
            src={blogCmsData.blog_header_image.url}
            alt={blogCmsData.blog_header_image.alt}
          />
        </div>
      </div>
      <div className="blog-item-body">
        <BlogBody body={blogCmsData.body} />
      </div>
    </div>
  );
}

export default Blog;
