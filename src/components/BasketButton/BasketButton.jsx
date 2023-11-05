import { ShoppingCartOutlined } from "@ant-design/icons";
import { useProducts, useToast } from "../../hooks";
import styles from "./styles.module.css";
import useCatalog from "../../store/useCatalog";
import { ToastListComponent } from "..";

const BasketButtonComponent = ({ product, selectedSize, color, showToast }) => {
  const [products, addProducts] = useProducts();
  const size = selectedSize?.id;
  const { addBasketItem } = useCatalog();
  const isDisabled = !color?.sizes.includes(size);

  const handleOnButtonClick = () => {
    if (!isDisabled) {
      const newItem = {
        id: product?.id,
        colorId: color?.id,
        size: selectedSize,
        images: color?.images,
        price: color?.price,
        name: `${product?.name} ${color?.name}`,
      };
      const isItemContains = products.some(
        (product) =>
          `${product.id}${product.colorId}${product.size?.id}` ===
          `${newItem.id}${newItem.colorId}${newItem.size?.id}`
      );
      if (!isItemContains) {
        showToast("Товар успешно добавлен в корзину");
        addProducts(newItem);
        addBasketItem(newItem);
      } else {
        showToast("Товар уже добавлен в корзину");
      }
    }
  };
  return (
    <div
      className={`${styles.buttonContainer} ${
        isDisabled ? styles.buttonDisabled : ""
      }`}
      onClick={handleOnButtonClick}
    >
      <div className={styles.itemsCount}>{products.length}</div>
      <ShoppingCartOutlined className={styles.icon} />
    </div>
  );
};
export { BasketButtonComponent };
