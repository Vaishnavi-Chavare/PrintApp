import React from 'react';

const Review = ({ id, authorName, authorRole, date, text, tags, rating, avatarUrl }) => {
  return (
    <div className="review">
      <div className="review-header">
        <img src={avatarUrl} alt={authorName} className="avatar" />
        <div>
          <h3>{authorName}</h3>
          <p>{authorRole}</p>
          <p>{date}</p>
        </div>
      </div>
      <div className="review-content">
        <p>{text}</p>
      </div>
      <div className="review-footer">
        <div className="tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="rating">{rating} stars</div>
      </div>
    </div>
  );
};

export default Review;
