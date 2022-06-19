import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import { useState } from 'react';


const Product = props => {
  const currentColor = {color: props.colors[0]}
  const name = {name: props.name}

  const size = {size: props.sizes}
  const sizesArr = {size: size.size}
  console.log(sizesArr.size);
  let [isActive, setIsActive] = useState(false)
  const colors = {color: props.colors}
  const colorsArr = {color: colors.color}

  const handleActive = e => {
    e.preventDefault();
    setIsActive(true);
    console.log(setIsActive)
  }

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={name.name + ' shirt'}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${name.name}--${currentColor.color}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {props.basePrice}</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {sizesArr.size.map(size =>
              <li key={size.id}><button type="button">{size.name}</button></li> )}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {colorsArr.color.map(item =>
              <li key={item.id}><button type="button" onClick={handleActive} className={clsx(prepareColorClassName(item), isActive === true && styles.active)} />
              </li>
              )}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

export default Product;