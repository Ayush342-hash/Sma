// src/Sidebar.js
import React from 'react';
import './navbar.css';

const Sidebar = () => {
  return (
    <div className="sideBar">
      <div className="section">
        <h3>Latest Notifications</h3>
        <ul>
          <li>John commented on your post</li>
          <li>Anna liked your photo</li>
          <li>Mike followed you</li>
        </ul>
      </div>

      <div className="section">
        <h3>Recent Activities</h3>
        <ul>
          <li>Started following "Tech Trends"</li>
          <li>Liked "Amazing Travel Places"</li>
          <li>Commented on a post "Great Recipe!"</li>
        </ul>
      </div>

      <div className="section">
        <h3>Active Friends</h3>
        <ul>
          <li>John - Active Now</li>
          <li>Anna - Active 5 minutes ago</li>
          <li>Mike - Active 10 minutes ago</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
