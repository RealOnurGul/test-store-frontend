import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './HomePage.css';

const HomePage = () => {
  const featuredProducts = products.slice(0, 4);
  const newArrivals = products.slice(4, 8);

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>POWER OF SHE</h1>
            <p>Designed to move, made to last. Shop our latest collection of premium activewear that moves with you through every moment.</p>
            <Link to="/women" className="btn">SHOP WOMEN</Link>
          </div>
          <div className="hero-image">
            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDYwMCA4MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iODAwIiBmaWxsPSIjRjVGNUY1Ii8+Cjx0ZXh0IHg9IjMwMCIgeT0iNDAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkhFUk8gSU1BR0U8L3RleHQ+Cjwvc3ZnPgo=" alt="Hero" />
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="featured-categories">
        <div className="container">
          <div className="categories-grid">
            <div className="category-card">
              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDQwMCA1MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjRjVGNUY1Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iMjUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiPldPTUVOPC90ZXh0Pgo8L3N2Zz4K" alt="Women" />
              <div className="category-overlay">
                <h3>WOMEN</h3>
                <Link to="/women" className="btn btn-outline">SHOP NOW</Link>
              </div>
            </div>
            <div className="category-card">
              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDQwMCA1MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjRjVGNUY1Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iMjUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk1FTjwvdGV4dD4KPHN2Zz4K" alt="Men" />
              <div className="category-overlay">
                <h3>MEN</h3>
                <Link to="/men" className="btn btn-outline">SHOP NOW</Link>
              </div>
            </div>
            <div className="category-card">
              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDQwMCA1MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjRjVGNUY1Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iMjUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkFDQ0VTU09SSUVTPC90ZXh0Pgo8L3N2Zz4K" alt="Accessories" />
              <div className="category-overlay">
                <h3>ACCESSORIES</h3>
                <Link to="/accessories" className="btn btn-outline">SHOP NOW</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <div className="container">
          <div className="section-header">
            <h2>FEATURED</h2>
            <p>Discover our most-loved pieces</p>
          </div>
          <div className="products-grid grid grid-4">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="banner-section">
        <div className="banner-content">
          <div className="banner-text">
            <h2>FIND YOUR POWER</h2>
            <p>Move freely in gear that's designed to keep up with your active lifestyle. From yoga flows to strength training, we've got you covered.</p>
            <Link to="/women" className="btn">EXPLORE COLLECTION</Link>
          </div>
          <div className="banner-image">
            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjVGNUY1Ii8+Cjx0ZXh0IHg9IjMwMCIgeT0iMjAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjAiIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkJBTk5FUiBJTUFHRTwvdGV4dD4KPHN2Zz4K" alt="Banner" />
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="new-arrivals">
        <div className="container">
          <div className="section-header">
            <h2>NEW ARRIVALS</h2>
            <p>Fresh styles just dropped</p>
          </div>
          <div className="products-grid grid grid-4">
            {newArrivals.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="section-footer">
            <Link to="/women" className="btn btn-outline">VIEW ALL NEW ARRIVALS</Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h3>SUSTAINABILITY</h3>
              <p>We're committed to reducing our environmental impact through innovative materials and responsible practices.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💪</div>
              <h3>COMMUNITY</h3>
              <p>Building connections through movement, wellness, and shared experiences in our global community.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">✨</div>
              <h3>INNOVATION</h3>
              <p>Pioneering technical fabrics and thoughtful design to elevate your performance and comfort.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 