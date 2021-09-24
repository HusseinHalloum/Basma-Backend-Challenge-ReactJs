import React from "react";

import './Dashboard.css';
import Header from "./Header";
import DashboardBody from "./DashboardBody";

const Dashboard = () => {
  return (
    <div id="dashboard">
      <div className="main-container">
        <div className="inner-container">
          <Header />
          <DashboardBody />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
