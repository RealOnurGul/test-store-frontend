import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { id, name, price, originalPrice, image, colors, rating, reviews } = product;
  const [imageError, setImageError] = useState(false);

  const fallbackImage = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDQwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjRjVGNUY1Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iMzAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlBST0RVQ1QgSU1BR0U8L3RleHQ+Cjwvc3ZnPgo=";

  return (
    <div className="product-card">
      <Link to={`/product/${id}`} className="product-link">
        <div className="product-image">
          <img 
            src={imageError ? fallbackImage : image} 
            alt={name}
            onError={() => setImageError(true)}
            loading="lazy"
          />
          <div className="product-hover-overlay">
            <span className="quick-view">Quick View</span>
          </div>
        </div>
        
        <div className="product-info">
          <h3 className="product-name">{name}</h3>
          
          <div className="product-price">
            <span className="current-price">${price}</span>
            {originalPrice && (
              <span className="original-price">${originalPrice}</span>
            )}
          </div>
          
          {colors && colors.length > 0 && (
            <div className="product-colors">
              <span className="colors-text">{colors.length} color{colors.length > 1 ? 's' : ''}</span>
            </div>
          )}
          
          {rating && (
            <div className="product-rating">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <span 
                    key={i} 
                    className={`star ${i < Math.floor(rating) ? 'filled' : ''}`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="rating-text">({reviews})</span>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ProductCard; 