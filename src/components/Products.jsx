import React from 'react';
import ProductCard from './Products'; // Бул файл src/components/ProductCard.jsx экенин текшериңиз!

const productsData = [
  {
    id: 1,
    title: 'Упаковка',
    edition: 'Тираж: от 50 штук',
    description: 'Сделано из крафт-бумаги или плотного картона. Упаковки имеют различные формы и расцветки, изготовим форму под заказ.',
    image: '/images/packaging.jpg'
  },
  {
    id: 2,
    title: 'Пакеты',
    edition: 'Тираж: от 200 штук',
    description: 'С прямоугольным дном. От 10 см до 60 см по высоте. Материалы: картон, крафт-бумага. Различные расцветки и дизайн.',
    image: '/images/bags.jpg'
  },
  {
    id: 3,
    title: 'Кейсы',
    edition: 'Тираж: от 30 штук',
    description: 'Подойдет для документов и других бумаг. Различные расцветки, размеры и плотность. Материал: прессованная бумага.',
    image: '/images/cases.jpg'
  },
  {
    id: 4,
    title: 'Другие изделия',
    edition: 'Тираж: от 100 штук',
    description: 'Нестандартные упаковки, кейсы и другие изделия различных размеров и конфигураций. Изготовим в кратчайшие сроки.',
    image: '/images/other.jpg'
  }
];

const Products = () => {
  return (
    <section className="products container" id="products">
      <div className="product-grid">
        {productsData.map((item) => (
          <ProductCard
            key={item.id}
            title={item.title}
            edition={item.edition}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;