import React, { useState, useEffect, useRef } from "react";
import "./DashboardHeader.css";
import pandaAvatar from "../Assets/panda-dp.png";
import contactavatar from "../Assets/contact-avatar.png";
import { useNavigate } from "react-router-dom";
import mountainBackdrop from "../Assets/mountain-backdrop.png";
import { CiCube, CiViewList, CiRead, CiLock } from "react-icons/ci";
import { BiDotsVerticalRounded } from "react-icons/bi";

import {
  FaBell,
  FaEnvelope,
  FaMoon,
  FaThLarge,
  FaSearch,
  FaBars,
  FaCalendarAlt,
  FaRocket,
  FaBullhorn,
  FaStar,
  FaTimes,
} from "react-icons/fa";
import {
  CiMail,
  CiBellOn,
  CiDark,
  CiGrid42,
  CiSearch,
  CiMenuBurger,
  CiSquareRemove,
  CiCalendarDate,
  CiRocket,
  CiBullhorn,
  CiStar,
  CiShoppingCart,
  CiGrid41,
  CiPhone,
} from "react-icons/ci";

const sampleMessages = [
  {
    time: "AM 9:30",
    name: "Mathew Anderson",
    msg: "Just see the my new admin!",
  },
  {
    time: "AM 9:10",
    name: "Bianca Anderson",
    msg: "Just a reminder that you have event",
  },
  {
    time: "AM 9:08",
    name: "Andrew Johnson",
    msg: "... You can customize this template as you",
  },
  { time: "AM 9:30", name: "Miyra Strokes", msg: "Just see the my new admin!" },
  {
    time: "AM 9:10",
    name: "Mark, Stoinus & Rishvi",
    msg: "Just a reminder that you have event",
  },
];

const sampleNotifications = [
  {
    time: "AM 9:30",
    title: "Launch Admin",
    text: "Just see the my new admin!",
    icon: <FaRocket style={{ color: "#84b9ff" }} />,
  },
  {
    time: "AM 9:10",
    title: "Event Today",
    text: "Just a reminder that you have event",
    icon: <FaCalendarAlt style={{ color: "#4cd7d0" }} />,
  },
  {
    time: "AM 9:08",
    title: "Event Today",
    text: "Just a reminder that you have event",
    icon: <FaBullhorn style={{ color: "#f36c97" }} />,
  },
  {
    time: "AM 9:20",
    title: "Launch Today",
    text: "Just see the my new admin!",
    icon: <FaStar style={{ color: "#ffc168" }} />,
  },
  {
    time: "AM 9:30",
    title: "Event Today",
    text: "Just a reminder that you have event",
    icon: <FaCalendarAlt style={{ color: "#78ecb9" }} />,
  },
];

const languages = [
  { name: "English (UK)", flag: "https://flagcdn.com/w40/gb.png" },
  { name: "中国人 (Chinese)", flag: "https://flagcdn.com/w40/cn.png" },
  { name: "français (French)", flag: "https://flagcdn.com/w40/fr.png" },
  { name: "(Arabic) عربي", flag: "https://flagcdn.com/w40/sa.png" },
];

const DashboardHeader = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [activePanel, setActivePanel] = useState(null); // dropdown, messages, notifications, sidebar, language
  const [showSidePanel, setShowSidePanel] = useState(false);

  const wrapperRef = useRef(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (user && user.name && user.email) setUserInfo(user);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setActivePanel(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser"); // Clear login session
    navigate("/"); // Redirect to login page
    navigate("/", { replace: true });
  };

  const togglePanel = (panelName) => {
    setActivePanel((prev) => (prev === panelName ? null : panelName));
  };

  useEffect(() => {
    if (showSidePanel) {
      document.body.style.overflow = "hidden"; // 🚫 stop background scroll
    } else {
      document.body.style.overflow = "auto"; // ✅ restore scroll
    }
    return () => {
      document.body.style.overflow = "auto"; // clean up on unmount
    };
  }, [showSidePanel]);

  useEffect(() => {
    if (showSidePanel || activePanel === "sidebar") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showSidePanel, activePanel]);

  return (
    <div className="dashboard-header" ref={wrapperRef}>
      <div className="left-section">
        {/* Avatar dropdown */}
        <div className="avatar-wrapper" onClick={() => togglePanel("dropdown")}>
          <img src={pandaAvatar} alt="User Avatar" className="avatar-icon" />
          {activePanel === "dropdown" && (
            <div className="user-dropdown styled">
              <div className="dropdown-header">
                <div className="info">
                  <div className="name">Jane Doe</div>
                  <div className="email">jane.doe@example.com</div>
                </div>
                <img
                  src={pandaAvatar}
                  alt="Profile"
                  className="dropdown-avatar"
                />
              </div>

              <ul className="dropdown-menu">
                <li>My Profile</li>
                <li>My Notes</li>
                <li>Inbox</li>
                <li className="mode-toggle">
                  <FaMoon className="mode-icon" /> Mode
                </li>
                <li>Account Settings</li>
                <li className="sign-out" onClick={handleLogout}>
                  Sign Out
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Mail Icon Popup */}
        <div className="icon-wrapper" onClick={() => togglePanel("messages")}>
          <CiMail className="icon" />
          {activePanel === "messages" && (
            <div className="message-popup">
              <div className="popup-header">
                <h4>Messages</h4>
                <p>You have 5 new messages</p>
              </div>
              <div className="popup-messages">
                {sampleMessages.map((msg, i) => (
                  <div key={i} className="popup-message-row">
                    <div className="msg-time">{msg.time}</div>
                    <div className="msg-content">
                      <div className="msg-name">{msg.name}</div>
                      <div className="msg-snippet">{msg.msg}</div>
                    </div>
                    <img
                      src={contactavatar}
                      alt={msg.name}
                      className="msg-avatar"
                    />
                  </div>
                ))}
              </div>
              <div className="popup-footer">
                <button className="check-btn">➤ Check all Messages</button>
              </div>
            </div>
          )}
        </div>

        {/* Notification Bell Popup */}
        <div
          className="icon-wrapper"
          onClick={() => togglePanel("notifications")}
        >
          <CiBellOn className="icon" />
          {activePanel === "notifications" && (
            <div className="notification-popup">
              <div className="popup-header">
                <h4>Notifications</h4>
                <p>You have 4 Notifications</p>
              </div>
              <div className="popup-messages">
                {sampleNotifications.map((note, i) => (
                  <div key={i} className="popup-message-row">
                    <div className="msg-time">{note.time}</div>
                    <div className="msg-content">
                      <div className="msg-name">{note.title}</div>
                      <div className="msg-snippet">{note.text}</div>
                    </div>
                    <div className="msg-avatar">{note.icon}</div>
                  </div>
                ))}
              </div>
              <div className="popup-footer">
                <button className="check-btn green">
                  ➤ Check all Notifications
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar Trigger */}
        <div className="icon-wrapper" onClick={() => togglePanel("sidebar")}>
          <CiShoppingCart className="icon" />
        </div>

        <CiDark className="icon" />

        {/* Language Popup */}
        <div
          className="language-wrapper"
          onClick={() => togglePanel("language")}
        >
          <img
            src="https://flagcdn.com/w40/gb.png"
            alt="UK Flag"
            className="flag"
          />
          {activePanel === "language" && (
            <div className="language-popup">
              {languages.map((lang, index) => (
                <button key={index} className="language-option">
                  <img
                    src={lang.flag}
                    alt={lang.name}
                    className="language-flag"
                  />
                  {lang.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="right-section">
        <CiGrid41 className="icon" onClick={() => togglePanel("gridPopup")} />
        {activePanel === "gridPopup" && (
          <div className={`grid-popup`}>
            <div className="grid-column left">
              <h4>Quick Links</h4>
              <ul>
                <li>Pricing Page</li>
                <li>Authentication Design</li>
                <li>Register Now</li>
                <li>Error Page 404</li>
                <li>Notes App</li>
                <li>User Application</li>
                <li>Account Setting</li>
              </ul>
            </div>

            <div className="grid-column right">
              <div className="grid-card">
                <div className="icon-circle pink">
                  <CiGrid42 />
                </div>
                <div>
                  <strong>User Profile</strong>
                  <p>Learn more information</p>
                </div>
              </div>
              <div className="grid-card">
                <div className="icon-circle blue">
                  <CiMail />
                </div>
                <div>
                  <strong>Chat Application</strong>
                  <p>New messages arrived</p>
                </div>
              </div>
              <div className="grid-card">
                <div className="icon-circle indigo">
                  <CiCalendarDate />
                </div>
                <div>
                  <strong>Calendar App</strong>
                  <p>Get dates</p>
                </div>
              </div>
              <div className="grid-card">
                <div className="icon-circle teal">
                  <CiPhone />
                </div>
                <div>
                  <strong>Notes App</strong>
                  <p>Get regular notes</p>
                </div>
              </div>
              <div className="grid-card">
                <div className="icon-circle teal">
                  <CiBullhorn />
                </div>
                <div>
                  <strong>eCommerce App</strong>
                  <p>New stock available</p>
                </div>
              </div>
              <div className="grid-card">
                <div className="icon-circle green">
                  <CiStar />
                </div>
                <div>
                  <strong>Contact Application</strong>
                  <p>Unsaved contact 2</p>
                </div>
              </div>
              <div className="grid-card">
                <div className="icon-circle green">
                  <CiMail />
                </div>
                <div>
                  <strong>Ticket Application</strong>
                  <p>Get structured tickets</p>
                </div>
              </div>
              <div className="grid-card">
                <div className="icon-circle yellow">
                  <CiMail />
                </div>
                <div>
                  <strong>Email App</strong>
                  <p>Get new emails</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <CiSearch className="icon" onClick={() => togglePanel("search")} />
        {activePanel === "search" && (
          <div className="search-backdrop" onClick={() => setActivePanel(null)}>
            <div className="search-popup" onClick={(e) => e.stopPropagation()}>
              <div className="search-popup-header">
                <button
                  className="close-btn"
                  onClick={() => setActivePanel(null)}
                >
                  ×
                </button>
                <input
                  type="text"
                  placeholder="Search here"
                  className="search-input"
                />
              </div>
              <div className="search-popup-links">
                <h4>Quick Page Links</h4>
                <ul>
                  <li>
                    <a href="/dashboards/classic">Classic</a>
                  </li>
                  <li>
                    <a href="/dashboards/analytical">Analytical</a>
                  </li>
                  <li>
                    <a href="/dashboards/campaign">Campaign</a>
                  </li>
                  <li>
                    <a href="/dashboards/modern">Modern</a>
                  </li>
                  <li>
                    <a href="/dashboards/ecommerce">eCommerce</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        <CiMenuBurger
          className="icon"
          onClick={() => setShowSidePanel((prev) => !prev)}
        />

        <span className="brand">
          <strong>MATERIAL</strong>PRO
        </span>
        <img
          src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
          alt="Logo"
          className="logo"
        />
      </div>
      {showSidePanel && (
        <div className="side-overlay" onClick={() => setShowSidePanel(false)}>
          <div className="side-panel" onClick={(e) => e.stopPropagation()}>
             <img src={mountainBackdrop} alt="Backdrop" className="side-panel-image" />
            <div className="side-panel-content">
              <div className="panel-section">
                <h4>Personal</h4>
                <ul>
                  <li>
                    <a href="/profile">My Profile</a>
                  </li>
                  <li>
                    <a href="/settings">Settings</a>
                  </li>
                </ul>
              </div>

              <div className="panel-section">
                <h4>Apps</h4>
                <ul>
                  <li>
                    <a href="/dashboards/general">General</a>
                  </li>
                  <li>
                    <a href="/dashboards/classic">Classic</a>
                  </li>
                  <li>
                    <a href="/dashboards/analytical">Analytical</a>
                  </li>
                </ul>
              </div>

              <div className="panel-section">
                <h4>Pages</h4>
                <ul>
                  <li>
                    <a href="/pages/faq">FAQ</a>
                  </li>
                  <li>
                    <a href="/pages/login">Login</a>
                  </li>
                  <li>
                    <a href="/pages/error">Error 404</a>
                  </li>
                </ul>
              </div>

              <div className="panel-section">
                <h4>Forms</h4>
                <ul>
                  <li>
                    <a href="/forms/basic">Basic Form</a>
                  </li>
                  <li>
                    <a href="/forms/advanced">Advanced Form</a>
                  </li>
                </ul>
              </div>

              <div className="panel-section">
                <h4>Charts</h4>
                <ul>
                  <li>
                    <a href="/charts/bar">Bar Chart</a>
                  </li>
                  <li>
                    <a href="/charts/pie">Pie Chart</a>
                  </li>
                  <li>
                    <a href="/charts/line">Line Chart</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {activePanel === "sidebar" && (
        <div className="side-overlay" onClick={() => setActivePanel(null)}>
          <div
            className="cart-sidebar"
            onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
          >
            <div className="cart-header">
              <FaTimes
                className="close-btn"
                onClick={() => setActivePanel(null)}
              />
              <h3>Shopping Cart</h3>
            </div>
            <div className="cart-body">
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-3613103-3020777.png"
                alt="Empty Cart"
                className="cart-image"
              />
              <p className="empty-text">Cart is Empty</p>
              <button className="check-btn blue">Go back to Shopping</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardHeader;
