import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = ({ product }) => {
  const { name, price, originalPrice, imageUrl, brand, location, rating, shipping, tags } = product;
  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} />
      <div className="product-info">
        <h3>{name}</h3>
        <p>{brand} - {location}</p>
        <p>Rating: {rating}</p>
        <p>Price: {price} {originalPrice && <span className="original-price">{originalPrice}</span>}</p>
        <p>{shipping}</p>
        <div className="tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        <button>Add To Cart</button>
        <button>Make Offer</button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    originalPrice: PropTypes.string,
    imageUrl: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    shipping: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default ProductCard;
