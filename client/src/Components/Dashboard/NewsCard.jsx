import React from 'react';
import './NewsCard.css';
import { FaShareAlt } from 'react-icons/fa';
import blogstock from '../Assets/blog-stock.jpg'; // Local image

const NewsCard = () => {
  return (
    <div className="news-card">
      <img
        className="news-card-image"
        src={blogstock}
        alt="Blog Thumbnail"
      />

      <span className="news-tag">Technology</span>

      <h3 className="news-title">Business development new rules for 2025</h3>

      <p className="news-desc">
        Lorem ipsum dolor sit amet, this is a sample snippet for demonstration.
      </p>

      <div className="news-footer">
        <FaShareAlt className="share-icon" />
        <button className="read-more-btn">Read More</button>
      </div>
    </div>
  );
};

export default NewsCard;
