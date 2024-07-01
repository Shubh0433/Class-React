import React from 'react';
import ProductList from './ProductList';
import './App.css'

const products = [
  // Add your product objects here
];

function App() {
  return (
    <div className="App">
      <ProductList products={products} />
    </div>
  );
}

export default App;
