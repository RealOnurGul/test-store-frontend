import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { id, name, price, originalPrice, image, colors, rating, reviews } = product;

  return (
    <div className="product-card">
      <Link to={`/product/${id}`} className="product-link">
        <div className="product-image">
          <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDQwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjRjVGNUY1Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iMzAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlBST0RVQ1QgSU1BR0U8L3RleHQ+Cjwvc3ZnPgo=" alt={name} />
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
      
      <button className="wishlist-btn" aria-label="Add to wishlist">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </button>
    </div>
  );
};

export default ProductCard; 