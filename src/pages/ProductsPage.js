import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { getProductsByCategory } from '../data/products';
import './ProductsPage.css';

const ProductsPage = ({ category }) => {
  const { category: paramCategory } = useParams();
  const currentCategory = category || paramCategory;
  
  const [sortBy, setSortBy] = useState('featured');
  const [filterBy, setFilterBy] = useState('all');
  
  const products = getProductsByCategory(currentCategory);
  
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];
    
    // Apply filters
    if (filterBy !== 'all') {
      filtered = filtered.filter(product => product.subcategory === filterBy);
    }
    
    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'rating':
        filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      default:
        // Keep original order for 'featured'
        break;
    }
    
    return filtered;
  }, [products, sortBy, filterBy]);
  
  const subcategories = [...new Set(products.map(p => p.subcategory))];
  
  const getCategoryTitle = () => {
    switch (currentCategory) {
      case 'women': return 'WOMEN';
      case 'men': return 'MEN';
      case 'accessories': return 'ACCESSORIES';
      default: return 'PRODUCTS';
    }
  };

  return (
    <div className="products-page">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <h1>{getCategoryTitle()}</h1>
          <p>Discover our collection of premium activewear designed for every movement</p>
        </div>
        
        {/* Filters and Sorting */}
        <div className="products-controls">
          <div className="filters">
            <select 
              value={filterBy} 
              onChange={(e) => setFilterBy(e.target.value)}
              className="filter-select"
            >
              <option value="all">All Items</option>
              {subcategories.map(sub => (
                <option key={sub} value={sub}>
                  {sub.charAt(0).toUpperCase() + sub.slice(1)}
                </option>
              ))}
            </select>
          </div>
          
          <div className="sorting">
            <label htmlFor="sort-select">Sort by:</label>
            <select 
              id="sort-select"
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="featured">Featured</option>
              <option value="name">Name A-Z</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>
        
        {/* Results Count */}
        <div className="results-info">
          <p>{filteredAndSortedProducts.length} item{filteredAndSortedProducts.length !== 1 ? 's' : ''}</p>
        </div>
        
        {/* Products Grid */}
        {filteredAndSortedProducts.length > 0 ? (
          <div className="products-grid grid grid-4">
            {filteredAndSortedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="no-products">
            <h3>No products found</h3>
            <p>Try adjusting your filters or browse all items.</p>
          </div>
        )}
        
        {/* Load More Button (if you want to implement pagination) */}
        {filteredAndSortedProducts.length > 0 && (
          <div className="load-more">
            <button className="btn btn-outline">LOAD MORE</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage; 