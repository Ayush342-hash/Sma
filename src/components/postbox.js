import React from 'react';
import './PostBox.css'; // Add custom styles here

const PostBox = () => {
  return (
    <div className="post-box">
      <div className="input-section">
        <img
          className="profile-pic"
          src="/images/download.jpg"
          alt="Profile"
        />
        <input
          className="status-input"
          type="text"
          placeholder="What's on your mind?"
        />
      </div>
      <div className="actions">
        <button className="action-btn">
          <span role="img" aria-label="Go Live">
            📹
          </span>{' '}
          Go Live
        </button>
        <button className="action-btn">
          <span role="img" aria-label="Photo">
            📷
          </span>{' '}
          Photo
        </button>
        <button className="action-btn">
          <span role="img" aria-label="Video">
            🎥
          </span>{' '}
          Video
        </button>
        <button className="action-btn">
          <span role="img" aria-label="Feeling">
            😊
          </span>{' '}
          Feeling
        </button>
      </div>
    </div>
  );
};

export default PostBox;
