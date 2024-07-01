import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ image, discount, name, price, oldPrice, rating, tags }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={name} />
        <span className="card-discount">{discount}</span>
        <span className="card-favorite">❤</span>
      </div>
      <div className="card-details">
        <h3>{name}</h3>
        <p className="card-price">
          ${price} <span className="card-old-price">${oldPrice}</span>
        </p>
        <div className="card-rating">
          {[...Array(5)].map((star, index) => (
            <span key={index} className={index < rating ? 'filled' : ''}>★</span>
          ))}
        </div>
        <div className="card-tags">
          {tags.map((tag, index) => (
            <span key={index} className="card-tag">{tag}</span>
          ))}
        </div>
      </div>
      <div className="card-footer">
        <button className="card-buy-button">BUY</button>
        <span className="card-offer">20% Off</span>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  discount: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  oldPrice: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Card;
