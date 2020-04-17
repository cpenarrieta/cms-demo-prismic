import React from "react";
import Banner from "../components/Banner";
import dashboardImahe from "../images/dashboard-image.jpg";

function Dashboard({ userFirstName }) {
  return (
    <div className="dashboard">
      <h2>Welcome to Gusto</h2>
      <h3>Welcome {userFirstName} take a look at your dashboard.</h3>
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
