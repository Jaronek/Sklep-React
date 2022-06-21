import styles from './ProductHeader.module.scss';


const ProductHeader = props => {

    return(
      <header>
        <h2 className={styles.name}>{props.title}</h2>
        <span className={styles.price}>Price: {props.totalCost} </span>
      </header>
    ); 
}
export default ProductHeader;