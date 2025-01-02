import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [showMore, setShowMore] = useState(false);

  // Sidebar menu items
  const sidebarItems = [
    { icon: "fas fa-home", label: "Home", link: "/" },
    { icon: "fas fa-user-friends", label: "Friends", link: "/friends" },
    { icon: "fas fa-bookmark", label: "Saved", link: "/saved" },
    { icon: "fas fa-store", label: "Marketplace", link: "/marketplace" },
    { icon: "fas fa-users", label: "Groups", link: "/groups" },
    { icon: "fas fa-file-alt", label: "Pages", link: "/pages" },
    { icon: "fas fa-calendar", label: "Events", link: "/events" },
    { icon: "fas fa-cogs", label: "Settings", link: "/settings" },
    { icon: "fas fa-info-circle", label: "Help", link: "/help" },
  ];

  const myGroups = [
    "Hostel Friends",
    "Office Buddies",
    "Gaming Squad",
    "Project Team",
    "Family Group",
  ];

  const visibleItems = showMore ? sidebarItems : sidebarItems.slice(0, 6);

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <a href="/" className="logo">
            CircleNet
          </a>
        </div>
        <div className="navbar-right">
          <a href="/account" className="user-icon">
            <i className="fas fa-user"></i>
          </a>
        </div>
      </nav>

      {/* Sidebar */}
      <aside className="sidebar">
        <ul className="sidebar-menu">
          {visibleItems.map((item, index) => (
            <li key={index}>
              <a href={item.link} className="sidebar-item">
                <i className={item.icon}></i>
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
        {sidebarItems.length > 6 && (
          <div
            className="show-more"
            onClick={() => setShowMore((prev) => !prev)}
          >
            <i className={showMore ? "fas fa-chevron-up" : "fas fa-chevron-down"}></i>
            <span>{showMore ? "Show Less" : "Show More"}</span>
          </div>
        )}
        <h3 className="my-groups-heading">My Groups</h3>
        <ul className="my-groups">
          {myGroups.map((group, index) => (
            <li key={index} className="group-item">
              {group}
            </li>
          ))}
        </ul>
      </aside>

   
     
    </div>
  );
};  

export default Navbar;
