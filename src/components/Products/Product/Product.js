import styles from './Product.module.scss';
import { useMemo, useState } from 'react';
import ProductImage from './ProductImage/ProductImage';
import ProductHeader from './ProductHeader/ProductHeader';
import ProductForm from './ProductForm/ProductForm';

const Product = props => {
  const colors = props.colors;
  const name = props.name;
  const sizeArr = props.sizes; 
  const title = props.title;
  const price = props.basePrice;
  const [activeColor, setActiveColor] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const additionalPrice = sizeArr[activeSize].additionalPrice;
  
   
  const getPrice = (additionalPrice, price) => {
    const totalPrice = additionalPrice + price
    return(totalPrice);
  };

  const totalCost = useMemo(() => {
    return getPrice(additionalPrice, price)}, [additionalPrice, price])

  const handleActiveColor = color => {
    setActiveColor(color);
  }

  const handleActiveSize = size => {
    setActiveSize(size);
  }

  const handleCart = e => {
    e.preventDefault();
    console.log('Summary');
    console.log('=========');
    console.log('Name: ' + props.title );
    console.log('Cena: ' + totalCost);
    console.log('Rozmiar: ' + sizeArr[activeSize].name)
    console.log('Kolor: ' + colors[activeColor])
  }
  
  return (
    <article className={styles.product}>
      <ProductImage name={name} activeColor={activeColor} colors={colors}/>
      <div>
        <ProductHeader title={title} totalCost={totalCost} />
        <ProductForm sizeArr={sizeArr} colors={colors} handleActiveColor={handleActiveColor} handleActiveSize={handleActiveSize} activeSize={activeSize} activeColor={activeColor} handleCart={handleCart}/>
      </div>
      
    </article>
  )
};

export default Product;