import React from "react";
import DashboardHeader from "../Components/Dashboard/DashboardHeader";
import VisitorsChart from "../Components/Dashboard/VisitorsChart";
import SalesChart from "../Components/Dashboard/SalesChart";
import NewsletterChart from "../Components/Dashboard/NewsletterChart";
import NewsCard from "../Components/Dashboard/NewsCard";
import InfoBox from "../Components/Dashboard/InfoBox";
import ProfileCard from "../Components/Dashboard/ProfileCard";
import ProfileTabs from "../Components/Dashboard/ProfileTabs";
import ContactCard from "../Components/Dashboard/ContactCard";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";




import { FaCloudSun, FaChartBar, FaServer } from "react-icons/fa";

import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem("loggedInUser");
    };

    //tab close refresh
    window.addEventListener("beforeunload", handleBeforeUnload);

    //Cleanup user leaves the route
    return () => {
      localStorage.removeItem("loggedInUser");
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div>
      <DashboardHeader />

      <div className="dashboard-container">
        {/* Top Stats */}
        <div className="top-stats">
          <div className="stat-box">
            <p>Last Month</p>
            <h3 className="stat-value last-month">$58,256</h3>
          </div>
          <div className="stat-box">
            <p>This Month</p>
            <h3 className="stat-value this-month">$58,256</h3>
          </div>
        </div>

        {/* Charts */}
        <div className="chart-grid">
          <div className="chart-box small">
            <VisitorsChart />
          </div>
          <div className="chart-box">
            <SalesChart />
          </div>
        </div>

        {/* Newsletter + Blog */}
        <div className="newsletter-row">
          <div className="newsletter-chart-box">
            <NewsletterChart />
          </div>
          <div className="news-card-box">
            <NewsCard />
          </div>
        </div>

        {/* Info Boxes */}
        <div className="infobox-row">
          <InfoBox
            bgColor="#B4B4B4"
            title="Sunday 15 March"
            subtitle="New Delhi"
            value="°C 25 Tonight"
            icon={<FaCloudSun />}
          >
            <div>
              <p
                style={{
                  fontSize: "14px",
                  color: "#007bff",
                  marginBottom: "4px",
                }}
              >
                °C 32
              </p>
              <p style={{ fontSize: "12px", color: "#FFFF" }}>Sunny Rainy</p>
            </div>
          </InfoBox>

          <InfoBox
            bgColor="#2ad2c9"
            title="Download Count"
            subtitle="March 2025"
            value="3,487"
            icon={<FaChartBar />}
          >
            <div style={{ height: "40px" }} />
          </InfoBox>

          <InfoBox
            bgColor="#6f42c1"
            title="Bandwidth Usage"
            subtitle="March 2025"
            value="GB 50"
            icon={<FaServer />}
          >
            <div style={{ height: "40px" }} />
          </InfoBox>
        </div>

        {/* Profile Tabs + Profile Card */}
        <div className="profile-row">
          <div className="profile-tabs-box">
            <ProfileTabs />
          </div>
          <div className="profile-side-column">
            <div className="profile-card-box">
              <ProfileCard />
            </div>
            <div className="contact-card-box">
              <ContactCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
