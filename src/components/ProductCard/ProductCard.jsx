import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const ProductCardComponent = ({ product }) => {
  const path = `${product?.colors[0].images?.[0]}`;
  const navigate = useNavigate();
  const handleOnCardClick = () => {
    navigate(`/item/${product.id}`);
  };

  return (
    <div className={styles.card} onClick={handleOnCardClick}>
      <div className={styles.title}>Название</div>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={path} alt={product.name} />
      </div>
    </div>
  );
};

export { ProductCardComponent };
