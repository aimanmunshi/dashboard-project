import React from 'react';
import './ProfileCard.css';
import pandaAvatar from '../Assets/panda-dp.png'; // adjust path as needed


const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="profile-banner" />
      <img className="profile-avatar" src={pandaAvatar} alt="User Avatar" />

      <h3 className="profile-name">Aiman Munshi</h3>
      <p className="profile-role">Web Designer & Developer</p>
      <button className="follow-btn">Follow</button>
      <div className="profile-stats">
        <div>
          <h4>6,035</h4>
          <p>Following</p>
        </div>
        <div>
          <h4>23,469</h4>
          <p>Followers</p>
        </div>
        <div>
          <h4>1,099</h4>
          <p>Articles</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
