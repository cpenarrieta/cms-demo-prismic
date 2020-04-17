import React from "react";
import Banner from "../components/Banner";
import dashboardImahe from "../images/dashboard-image.jpg";
// import { useQuery } from '@apollo/react-hooks';
// import gql from 'graphql-tag';

// const DASHBOARD_CMS_QUERY = gql`
//   query {
//     allDashboards(tags: "payroll-admin") {
//       edges {
//         node {
//           dashboard_title
//           dashboard_sub_title
//           dashboard_description
//           banners {
//             banner_title
//             banner_content
//             banner_type
//           }
//           welcome_image
//         }
//       }
//     }
//   }
// `;

function Dashboard({ userFirstName }) {
  // const { loading, data } = useQuery(DASHBOARD_CMS_QUERY);

  // if (loading) {
  //   return <div>loading...</div>
  // }

  return (
    <div className="dashboard">
      <h2>Gusto Dashboard</h2>
      <h3>Welcome {userFirstName} to Gusto</h3>
      <div className="banners">
        <Banner
          title="COVID-19 important info"
          content="Covid-19 important message, Covid-19 important message, Covid-19 important message, Covid-19 important message, Covid-19 important message."
          type="warning"
        />
        <Banner
          title="Run your Payroll today"
          content="content regarding payroll, content regarding payroll, content regarding payroll, content regarding payroll, content regarding payroll, content regarding payroll, content regarding payroll."
          type="danger"
        />
      </div>
      <div>
        <div className="left">
          <img src={dashboardImahe} alt="dashboard logo" />
        </div>
        <div className="right">
          very long message here. very long message here. very long message
          here. very long message here. very long message here. very long
          message here. very long message here. very long message here. very
          long message here. very long message here.
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
