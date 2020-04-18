import React from "react";
import Banner from "../components/Banner";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { RichText } from "prismic-reactjs";

const DASHBOARD_CMS_QUERY = gql`
  query {
    allDashboards(tags: "payroll-admin", lang: "en-us") {
      edges {
        node {
          dashboard_title
          dashboard_sub_title
          dashboard_description
          banners {
            banner_title
            banner_content
            banner_type
          }
          welcome_image
        }
      }
    }
  }
`;

const injectFirstName = (str, userFirstName) =>
  str.replace("%userFirstName%", userFirstName);

function Dashboard({ userFirstName }) {
  const { loading, data } = useQuery(DASHBOARD_CMS_QUERY);
  const cmsData = data?.allDashboards?.edges?.[0]?.node;

  if (loading || !cmsData) {
    return <div>loading...</div>;
  }

  return (
    <div className="dashboard">
      <h2>{cmsData.dashboard_title}</h2>
      <h3>{injectFirstName(cmsData.dashboard_sub_title, userFirstName)}</h3>
      <div className="banners">
        {cmsData.banners.map((banner) => (
          <Banner
            title={banner.banner_title}
            content={RichText.render(banner.banner_content)}
            type={banner.banner_type}
          />
        ))}
      </div>
      <div className="dashboard-content">
        <div className="dashboard-image ">
          <img src={cmsData.welcome_image.url} alt="dashboard logo" />
        </div>
        <div className="dashboard-text">
          {RichText.render(cmsData.dashboard_description)}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;