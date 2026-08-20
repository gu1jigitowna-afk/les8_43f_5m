import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Brands from './components/Brands';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="landing-page">
      <Header />
      <main>
        <Hero />
        <Products />
        <Brands />
      </main>
      <Footer />
    </div>
  );
}

export default App;