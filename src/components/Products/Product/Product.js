import styles from './Product.module.scss';
import { useState } from 'react';
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

  const newArray = sizeArr.map (size => {
    return(size);
    });
  const makePrice = newArray[activeSize].additionalPrice + price;

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
    console.log('Cena: ' + makePrice);
    console.log('Rozmiar: ' + newArray[activeSize].name)
    console.log('Kolor: ' + colors[activeColor])
  }
  
  return (
    <article className={styles.product}>
      <ProductImage name={name} activeColor={activeColor} colors={colors}/>
      <div>
        <ProductHeader title={title} makePrice={makePrice} />
        <ProductForm sizeArr={sizeArr} colors={colors} handleActiveColor={handleActiveColor} handleActiveSize={handleActiveSize} activeSize={activeSize} activeColor={activeColor} handleCart={handleCart}/>
      </div>
      
    </article>
  )
};

export default Product;