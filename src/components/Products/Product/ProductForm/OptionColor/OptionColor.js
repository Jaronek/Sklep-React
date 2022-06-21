import clsx from 'clsx';
import styles from './OptionColor.module.scss';

const OptionColor = props => {
    
    const prepareColorClassName = color => {
        return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
      }

    return(
        <div className={styles.colors}>
          <h3 className={styles.optionLabel}>Colors</h3>
          <ul className={styles.choices}>
              {props.colors.map((item, index) =>
              <li key={item}><button type="button" onClick={() => props.handleActiveColor(index)} className={clsx(prepareColorClassName(item), index === props.activeColor && styles.active)} />
              </li>
              )}
          </ul>
        </div>)
}
export default OptionColor;