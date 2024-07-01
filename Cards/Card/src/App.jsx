import React from 'react';
import Card from './Card';
import './App.css';

const products = [
  {
    image: 'image1.jpg',
    discount: '-25%',
    name: 'White traditional long dress',
    price: 3.99,
    oldPrice: 5.99,
    rating: 4,
    tags: ['MONHPY', '20% Off'],
  },
  {
    image: 'image2.jpg',
    discount: '-25%',
    name: 'Long sleeve denim jacket',
    price: 3.99,
    oldPrice: 5.99,
    rating: 4.8,
    tags: ['SRPSPYDY', '20% Off'],
  },
  {
    image: 'image3.jpg',
    discount: '-25%',
    name: 'Hush Puppies',
    price: 3.99,
    oldPrice: 5.99,
    rating: 4.2,
    tags: ['HPYFRST', '20% Off'],
  },
  {
    image: 'image4.jpg',
    discount: '-25%',
    name: 'Athens skirt',
    price: 3.99,
    oldPrice: 5.99,
    rating: 3.8,
    tags: ['VEGANLOVE', '20% Off'],
  },
];

const App = () => {
  return (
    <div className="App">
      <h1>Product Cards</h1>
      <div className="card-container">
        {products.map((product, index) => (
          <Card key={index} {...product} />
        ))}
      </div>
    </div>
  );
}

export default App;
