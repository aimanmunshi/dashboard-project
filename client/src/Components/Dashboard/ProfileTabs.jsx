import React, { useState } from 'react';
import './ProfileTabs.css';

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState("Profile");

  const renderContent = () => {
    switch (activeTab) {
      case "Settings":
        return <div className="tab-content">Settings content goes here...</div>;

      case "Inbox":
        return <div className="tab-content">Inbox content goes here...</div>;

      case "Profile":
  return (
    <div className="tab-content profile-tab">
      {/* Scrollable section */}
      <div className="profile-scrollable">
        <div className="user-details-grid">
          <div><strong>Location</strong><br />New Delhi</div>
          <div><strong>Email</strong><br />munshiaiman2005@gmail.com</div>
          <div><strong>Mobile</strong><br />8178045506</div>
          <div><strong>Full Name</strong><br />Aiman Munshi</div>
        </div>

        <p className="profile-paragraph">
          Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. 
          In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
        </p>
        <p className="profile-paragraph">
          Nullam dictum felis eu pede mollis pretium. Integer tincidunt. 
          Cras dapibus. Vivamus elementum semper nisi.
        </p>
        <p className="profile-paragraph">
          Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, 
          consequat vitae, eleifend ac, enim.
        </p>
        <p className="profile-paragraph">
          It was popularised in the 1960s with the release of Letraset sheets 
          containing Lorem Ipsum passages, and more recently with desktop 
          publishing software.
        </p>
      </div>

      {/* Sticky Footer Section */}
      <div className="profile-skill-footer">
        <h4 className="skill-title">Skill set</h4>
        <div className="skill-bar"><span>Wordpress</span><div className="bar-fill fill-80"></div></div>
        <div className="skill-bar"><span>React</span><div className="bar-fill fill-50 react"></div></div>
        <div className="skill-bar"><span>VueJs</span><div className="bar-fill fill-45 vue"></div></div>
        <div className="skill-bar"><span>NextJs</span><div className="bar-fill fill-15 next"></div></div>
      </div>
    </div>
  );




      case "Activity":
        return (
          <div className="tab-content activity-tab">
            <p><strong>5 minutes ago</strong> — <span className="user">John Doe</span> assigned a new task: <a href="#">Design weblayout</a></p>
            <div className="activity-images">
              <img src="/images/act1.png" alt="act1" />
              <img src="/images/act2.png" alt="act2" />
              <img src="/images/act3.png" alt="act3" />
              <img src="/images/act4.png" alt="act4" />
            </div>
            <p><strong>5 minutes ago</strong> — <span className="user">Canry Smith</span> posted an update</p>
            <div className="activity-box">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="profile-tabs-container">
      <div className="profile-tabs-header">
        <h4>Profile Activity</h4>
        <p className="sub-label">Ample Admin Vs Pixel Admin</p>
      </div>

      <div className="tab-buttons">
        {["Settings", "Inbox", "Profile", "Activity"].map(tab => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {renderContent()}
    </div>
  );
};

export default ProfileTabs;
