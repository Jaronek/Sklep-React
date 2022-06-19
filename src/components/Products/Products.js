import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';

const Products = () => {
  const [products]  = useState(productsData);
  console.log('pierwsze', products[0]);
  console.log('drugie', productsData)
  return (
    <section>
      <Product {...products[0]} />
      <Product {...products[1]} />
    </section>
  );
};

export default Products;