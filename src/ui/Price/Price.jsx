import styles from "./styles.module.css";

const PriceUI = ({ price }) => {
  return <div className={styles.priceContainer}>{price} $</div>;
};

export { PriceUI };
