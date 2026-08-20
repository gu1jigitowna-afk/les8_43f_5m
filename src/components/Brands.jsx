import React from 'react';

const brandsList = [
  { id: 1, name: 'Hahnemühle', logo: '/images/brand-hahnemuhle.jpg' },
  { id: 2, name: 'CANSON', logo: '/images/brand-canson.jpg' },
  { id: 3, name: 'ROYAL TALENS', logo: '/images/brand-talens.jpg' },
  { id: 4, name: 'FABRIANO', logo: '/images/brand-fabriano.jpg' }
];

const Brands = () => {
  return (
    <section className="brands-section">
      <div className="container brands-grid">
        {brandsList.map((brand) => (
          <div key={brand.id} className="brand-card">
            <img src={brand.logo} alt={brand.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brands;