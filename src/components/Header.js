import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="header-top-content">
            <span>Free shipping on orders over $99</span>
            <div className="header-top-links">
              <a href="#store-locator">Store Locator</a>
              <span>|</span>
              <a href="#help">Help</a>
            </div>
          </div>
        </div>
      </div>
      
      <nav className="header-nav">
        <div className="container">
          <div className="nav-content">
            <div className="nav-left">
              <Link to="/" className="logo">
                lululemon
              </Link>
            </div>
            
            <div className={`nav-center ${isMenuOpen ? 'nav-open' : ''}`}>
              <ul className="nav-links">
                <li>
                  <Link 
                    to="/women" 
                    className={isActiveLink('/women') ? 'active' : ''}
                  >
                    WOMEN
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/men" 
                    className={isActiveLink('/men') ? 'active' : ''}
                  >
                    MEN
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/accessories" 
                    className={isActiveLink('/accessories') ? 'active' : ''}
                  >
                    ACCESSORIES
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="nav-right">
              <div className="nav-icons">
                <button className="icon-btn search-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                  </svg>
                </button>
                <button className="icon-btn wishlist-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </button>
                <button className="icon-btn cart-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                  </svg>
                  <span className="cart-count">0</span>
                </button>
                <button 
                  className="mobile-menu-btn"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 